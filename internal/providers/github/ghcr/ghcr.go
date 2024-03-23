// Copyright 2024 Stacklok, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Package ghcr provides a client for interacting with the GitHub Container Registry
package ghcr

import (
	"context"
	"errors"
	"fmt"
	"net/http"

	"github.com/google/go-github/v61/github"
	"golang.org/x/oauth2"

	"github.com/stacklok/minder/internal/verifier/verifyif"
	minderv1 "github.com/stacklok/minder/pkg/api/protobuf/go/minder/v1"
	provifv1 "github.com/stacklok/minder/pkg/providers/v1"
)

// GHCR is the string that represents the GHCR provider
const GHCR = "ghcr"

// ImageLister is the struct that contains the ImageLister client
type ImageLister struct {
	client    *github.Client
	namespace string
}

// Ensure that the GHCR client implements the ContainerLister interface
var _ provifv1.ImageLister = (*ImageLister)(nil)

// New creates a new GHCR client
func New(cred provifv1.OAuth2TokenCredential, namespace string) *ImageLister {
	tc := oauth2.NewClient(context.Background(), cred.GetAsOAuth2TokenSource())

	return &ImageLister{
		client:    github.NewClient(tc),
		namespace: namespace,
	}
}

// CanImplement returns true/false depending on whether the GHCR client can implement the specified trait
func (_ *ImageLister) CanImplement(trait minderv1.ProviderType) bool {
	return trait == minderv1.ProviderType_PROVIDER_TYPE_GHCR
}

// FromGitHubClient creates a new GHCR client from an existing GitHub client
func FromGitHubClient(client *github.Client, namespace string) *ImageLister {
	return &ImageLister{
		client:    client,
		namespace: namespace,
	}
}

// GetNamespaceURL returns the URL of the GHCR container namespace
func (g *ImageLister) GetNamespaceURL() string {
	return fmt.Sprintf("ghcr.io/%s", g.namespace)
}

// ListImages lists the containers in the GHCR
func (g *ImageLister) ListImages(ctx context.Context) ([]string, error) {
	pageNumber := 0
	itemsPerPage := 100
	pt := string(verifyif.ArtifactTypeContainer)
	opt := &github.PackageListOptions{
		PackageType: &pt,
		ListOptions: github.ListOptions{
			Page:    pageNumber,
			PerPage: itemsPerPage,
		},
	}
	// create a slice to hold the containers
	var allContainers []string
	for {
		var artifacts []*github.Package
		var resp *github.Response
		var err error

		// TODO: handle organizations
		// artifacts, resp, err = g.client.Organizations.ListPackages(ctx, g.namespace, opt)
		artifacts, resp, err = g.client.Users.ListPackages(ctx, g.namespace, opt)
		if err != nil {
			if resp.StatusCode == http.StatusNotFound {
				return allContainers, fmt.Errorf("packages not found for namespace %s: %w", g.namespace, errors.New("not found"))
			}

			return allContainers, err
		}

		for _, artifact := range artifacts {
			allContainers = append(allContainers, artifact.GetName())
		}

		if resp.NextPage == 0 {
			break
		}
		opt.Page = resp.NextPage
	}

	return allContainers, nil
}
