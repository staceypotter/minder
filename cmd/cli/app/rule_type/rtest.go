// Copyright 2023 Stacklok, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//	http://www.apache.role/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Package rule provides the CLI subcommand for managing rules

package rule_type

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"

	"github.com/stacklok/mediator/internal/engine"
	"github.com/stacklok/mediator/internal/util"
	pb "github.com/stacklok/mediator/pkg/generated/protobuf/go/mediator/v1"
	ghclient "github.com/stacklok/mediator/pkg/providers/github"
)

// TestCmd is the root command for the rule subcommands
var testCmd = &cobra.Command{
	Use:   "test",
	Short: "test a rule type definition",
	Long:  `The 'rule_type test' subcommand allows you test a rule type definition`,
	RunE:  testCmdRun,
}

func init() {
	ruleTypeCmd.AddCommand(testCmd)
	testCmd.Flags().StringP("rule-type", "r", "", "file to read rule type definition from")
	testCmd.Flags().StringP("entity", "e", "", "YAML file containing the entity to test the rule against")
	testCmd.Flags().StringP("policy", "p", "", "YAML file containing a policy to test the rule against")
	testCmd.Flags().StringP("token", "t", "", "token to authenticate to the provider."+
		"Can also be set via the AUTH_TOKEN environment variable.")

	if err := testCmd.MarkFlagRequired("rule-type"); err != nil {
		fmt.Fprintf(os.Stderr, "Error marking flag as required: %s\n", err)
		os.Exit(1)
	}

	if err := testCmd.MarkFlagRequired("entity"); err != nil {
		fmt.Fprintf(os.Stderr, "Error marking flag as required: %s\n", err)
		os.Exit(1)
	}

	if err := viper.BindPFlag("auth.token", testCmd.Flags().Lookup("token")); err != nil {
		fmt.Fprintf(os.Stderr, "Error binding flag: %s\n", err)
		os.Exit(1)
	}
	// bind environment variable
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
}

func testCmdRun(cmd *cobra.Command, _ []string) error {
	rtpath := cmd.Flag("rule-type")
	epath := cmd.Flag("entity")
	ppath := cmd.Flag("policy")

	rt, err := readRuleTypeFromFile(rtpath.Value.String())
	if err != nil {
		return fmt.Errorf("error reading rule type from file: %w", err)
	}

	fmt.Printf("Rule Type: %+v\n", rt)

	_, err = readEntityFromFile(epath.Value.String(), rt.Def.InEntity)
	if err != nil {
		return fmt.Errorf("error reading entity from file: %w", err)
	}

	p, err := readPolicyFromFile(ppath.Value.String())
	if err != nil {
		return fmt.Errorf("error reading fragment from file: %w", err)
	}

	frag, err := getRelevantFragment(rt, p)
	if err != nil {
		return fmt.Errorf("error getting relevant fragment: %w", err)
	}

	client, err := getProviderClient(context.Background(), rt)
	if err != nil {
		return fmt.Errorf("error getting provider client: %w", err)
	}

	eng, err := engine.NewRuleTypeEngine(rt, client)
	if err != nil {
		return fmt.Errorf("error creating rule type engine: %w", err)
	}

	valid, err := eng.ValidateAgainstSchema(frag)
	if valid == nil {
		return fmt.Errorf("error validating fragment against schema: %w", err)
	}

	fmt.Printf("Valid: %t\n", *valid)
	if err != nil {
		fmt.Printf("Error: %s\n", err)
	}

	return nil
}

func readRuleTypeFromFile(fpath string) (*pb.RuleType, error) {
	f, err := os.Open(filepath.Clean(fpath))
	if err != nil {
		return nil, fmt.Errorf("error opening file: %w", err)
	}

	// We transcode to JSON so we can decode it straight to the protobuf structure
	w := &bytes.Buffer{}
	if err := util.TranscodeYAMLToJSON(f, w); err != nil {
		return nil, fmt.Errorf("error converting yaml to json: %w", err)
	}

	r := &pb.RuleType{}
	if err := json.NewDecoder(w).Decode(r); err != nil {
		return nil, fmt.Errorf("error decoding json: %w", err)
	}

	return r, nil
}

// readEntityFromFile reads an entity from a file and returns it as a protobuf
// golang structure.
// TODO: We probably want to move this code to a utility once we land the server
// side code.
func readEntityFromFile(fpath string, entType string) (any, error) {
	f, err := os.Open(filepath.Clean(fpath))
	if err != nil {
		return nil, fmt.Errorf("error opening file: %w", err)
	}

	// We transcode to JSON so we can decode it straight to the protobuf structure
	w := &bytes.Buffer{}
	if err := util.TranscodeYAMLToJSON(f, w); err != nil {
		return nil, fmt.Errorf("error converting yaml to json: %w", err)
	}

	var out any

	switch entType {
	case "repository":
		out = &pb.GetRepositoryResponse{}
	default:
		return nil, fmt.Errorf("unknown entity type: %s", entType)
	}

	if err := json.NewDecoder(w).Decode(out); err != nil {
		return nil, fmt.Errorf("error decoding json: %w", err)
	}

	return out, nil
}

func readPolicyFromFile(fpath string) (map[string]any, error) {
	f, err := os.Open(filepath.Clean(fpath))
	if err != nil {
		return nil, fmt.Errorf("error opening file: %w", err)
	}

	w := &bytes.Buffer{}
	if err := util.TranscodeYAMLToJSON(f, w); err != nil {
		return nil, fmt.Errorf("error converting yaml to json: %w", err)
	}

	var out map[string]any

	if err := json.NewDecoder(w).Decode(&out); err != nil {
		return nil, fmt.Errorf("error decoding json: %w", err)
	}

	return out, nil
}

// getRelevantFragment returns the relevant fragment for the rule type
// Note that this will eventually be replaced by a proper parser for pipeline
// policies.
// TODO: This should be moved to a policy package and we should have some
// generic interface for policies.
func getRelevantFragment(rt *pb.RuleType, p map[string]any) (any, error) {
	// We get the relevant entity for the rule type
	entityPolicyRaw, ok := p[rt.Def.InEntity]
	if !ok {
		return nil, fmt.Errorf("policy does not contain entity: %s", rt.Def.InEntity)
	}

	pipelineContext, ok := p["context"].(map[string]any)
	if !ok {
		return nil, fmt.Errorf("policy does not contain context")
	}

	defaultProvider, ok := pipelineContext["default-provider"].(string)
	if !ok {
		return nil, fmt.Errorf("policy does not contain valid default provider")
	}

	// cast to contextual rules which is an array
	contextualRules, ok := entityPolicyRaw.([]any)
	if !ok {
		return nil, fmt.Errorf("policy entity is not an array")
	}

	if len(contextualRules) == 0 {
		return nil, fmt.Errorf("policy entity array is empty")
	}

	// We get the relevant fragment for the rule type
	for idx := range contextualRules {
		ruleSet, ok := contextualRules[idx].(map[string]any)
		if !ok {
			return nil, fmt.Errorf("policy entity is not an object")
		}

		prov, ok := ruleSet["context"].(string)
		if !ok {
			return nil, fmt.Errorf("policy entity context is not a string")
		}

		if len(prov) == 0 {
			prov = defaultProvider
		}

		if prov != rt.Context.Provider {
			continue
		}

		rules, ok := ruleSet["rules"].(map[string]any)
		if !ok {
			return nil, fmt.Errorf("policy entity rules is not an object")
		}

		return rules, nil
	}

	return nil, fmt.Errorf("policy does not contain rules for provider: %s", rt.Context.Provider)
}

// getProviderClient returns a client for the provider specified in the rule type
// definition.
// TODO: This should be moved to a provider package and we should have some
// generic interface for clients.
func getProviderClient(ctx context.Context, rt *pb.RuleType) (ghclient.RestAPI, error) {
	token := viper.GetString("auth.token")
	switch rt.Context.Provider {
	case ghclient.Github:
		return ghclient.NewRestClient(ctx, ghclient.GitHubConfig{
			Token: token,
		})
	default:
		return nil, fmt.Errorf("unknown provider: %s", rt.Context.Provider)
	}
}
