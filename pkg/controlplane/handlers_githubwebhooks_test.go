//
// Copyright 2023 Stacklok, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// NOTE: This file is for stubbing out client code for proof of concept
// purposes. It will / should be removed in the future.
// Until then, it is not covered by unit tests and should not be used
// It does make a good example of how to use the generated client code
// for others to use as a reference.
package controlplane

import (
	"bytes"
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"testing"
	"time"

	"github.com/ThreeDotsLabs/watermill/pubsub/gochannel"
	"github.com/golang/mock/gomock"
	"github.com/google/go-github/v53/github"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"golang.org/x/oauth2"

	mockdb "github.com/stacklok/mediator/database/mock"
	"github.com/stacklok/mediator/internal/engine"
	"github.com/stacklok/mediator/internal/util"
	"github.com/stacklok/mediator/pkg/db"
)

// MockClient is a mock implementation of the GitHub client.
type MockClient struct {
	mock.Mock
}

// RunUnitTestSuite runs the unit test suite.
func RunUnitTestSuite(t *testing.T) {
	t.Helper()

	suite.Run(t, new(UnitTestSuite))
}

// Repositories is a mock implementation of the GitHub client's Repositories service.
func (m *MockClient) Repositories() *github.RepositoriesService {
	args := m.Called()
	return args.Get(0).(*github.RepositoriesService)
}

// CreateHook is a mock implementation of the GitHub client's CreateHook method.
func (m *MockClient) CreateHook(ctx context.Context, owner, repo string, hook *github.Hook) (*github.Hook, *github.Response, error) {
	args := m.Called(ctx, owner, repo, hook)
	return args.Get(0).(*github.Hook), args.Get(1).(*github.Response), args.Error(2)
}

// UnitTestSuite is the test suite for the unit tests.
type UnitTestSuite struct {
	suite.Suite
	mockClient *MockClient
}

// SetupTest is called before each test function is executed.
func (s *UnitTestSuite) SetupTest() {
	s.mockClient = new(MockClient)
}

// TestRegisterWebHook_Success tests the RegisterWebHook function when the webhook registration is successful.
func (s *UnitTestSuite) TestRegisterWebHook_Success() {
	// Set up the test data
	ctx := context.Background()
	token := oauth2.Token{AccessToken: "your-access-token"}
	repositories := []Repository{
		{Owner: "owner1", Repo: "repo1"},
	}
	events := []string{"push", "pull_request"}

	// Set up the expectations for the mock client
	s.mockClient.On("Repositories").Return(&github.RepositoriesService{})
	s.mockClient.On("CreateHook", ctx, "owner1", "repo1", mock.AnythingOfType("*github.Hook")).
		Return(&github.Hook{ID: github.Int64(0), CreatedAt: &github.Timestamp{Time: time.Now()}}, &github.Response{}, nil)

	// Inject the mock client into the RegisterWebHook function
	registerData, err := RegisterWebHook(ctx, token, repositories, events)
	require.NoError(s.T(), err)
	require.Len(s.T(), registerData, 1)

	// Assertions for the first result
	assert.Equal(s.T(), "repo1", registerData[0].Repository)
	assert.Equal(s.T(), "owner1", registerData[0].Owner)
	assert.Equal(s.T(), int64(0), registerData[0].HookID)
}

func (s *UnitTestSuite) TestHandleGitHubWebHook() {
	ctx := context.Background()
	token := oauth2.Token{AccessToken: "your-access-token"}
	repositories := []Repository{
		{Owner: "owner1", Repo: "repo1"},
		{Owner: "owner2", Repo: "repo2"},
	}

	events := []string{"push", "pull_request"}

	// Set up the expectations for the mock client
	s.mockClient.On("Repositories").Return(&github.RepositoriesService{})
	s.mockClient.On("CreateHook", ctx, "owner1", "repo1", mock.AnythingOfType("*github.Hook")).
		Return(&github.Hook{ID: github.Int64(0), CreatedAt: &github.Timestamp{Time: time.Now()}}, &github.Response{}, nil)
	// Call the function under test
	results, err := RegisterWebHook(ctx, token, repositories, events)

	// Assertions
	require.NoError(s.T(), err)
	require.Len(s.T(), results, 2)
	assert.Equal(s.T(), "repo1", results[0].Repository)
	assert.Equal(s.T(), "owner1", results[0].Owner)
	assert.Equal(s.T(), int64(0), results[0].HookID)
	assert.NotEmpty(s.T(), results[0].DeployURL)
}

// We should simply respond OK to ping events
func (s *UnitTestSuite) TestHandleWebHookPing() {
	t := s.T()
	t.Parallel()

	p := gochannel.NewGoChannel(gochannel.Config{}, nil)
	queued, err := p.Subscribe(context.Background(), engine.InternalEntityEventTopic)
	require.NoError(t, err, "failed to subscribe to internal webhook event topic")
	defer p.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockStore := mockdb.NewMockStore(ctrl)

	hook := HandleGitHubWebHook(p, mockStore)
	port, err := util.GetRandomPort()
	require.NoError(t, err, "failed to get random port")

	addr := fmt.Sprintf("localhost:%d", port)
	server := &http.Server{
		Addr:              fmt.Sprintf(":%d", port),
		Handler:           hook,
		ReadHeaderTimeout: 1 * time.Second,
	}
	go server.ListenAndServe()

	event := github.PingEvent{}
	packageJson, err := json.Marshal(event)
	require.NoError(t, err, "failed to marshal ping event")

	client := &http.Client{}
	req, err := http.NewRequest("POST", fmt.Sprintf("http://%s", addr), bytes.NewBuffer(packageJson))
	require.NoError(t, err, "failed to create request")

	req.Header.Add("X-GitHub-Event", "ping")
	req.Header.Add("X-GitHub-Delivery", "12345")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	require.NoError(t, err, "failed to make request")
	assert.Equal(t, http.StatusOK, resp.StatusCode, "unexpected status code")
	assert.Len(t, queued, 0, "unexpected number of queued events")
}

// We should ignore events from repositories that are not registered
func (s *UnitTestSuite) TestHandleWebHookUnexistentRepository() {
	t := s.T()
	t.Parallel()

	p := gochannel.NewGoChannel(gochannel.Config{}, nil)
	queued, err := p.Subscribe(context.Background(), engine.InternalEntityEventTopic)
	if err != nil {
		t.Fatal(err)
	}
	defer p.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockStore := mockdb.NewMockStore(ctrl)

	mockStore.EXPECT().
		GetRepositoryByRepoID(gomock.Any(), gomock.Any()).
		Return(db.Repository{}, sql.ErrNoRows)

	hook := HandleGitHubWebHook(p, mockStore)
	port, err := util.GetRandomPort()
	if err != nil {
		t.Fatal(err)
	}
	addr := fmt.Sprintf("localhost:%d", port)
	server := &http.Server{
		Addr:              fmt.Sprintf(":%d", port),
		Handler:           hook,
		ReadHeaderTimeout: 1 * time.Second,
	}
	go server.ListenAndServe()

	event := github.MetaEvent{
		Repo: &github.Repository{
			ID:   github.Int64(12345),
			Name: github.String("stacklok/mediator"),
		},
		Org: &github.Organization{
			Login: github.String("stacklok"),
		},
	}
	packageJson, err := json.Marshal(event)
	require.NoError(t, err, "failed to marshal package event")

	client := &http.Client{}
	req, err := http.NewRequest("POST", fmt.Sprintf("http://%s", addr), bytes.NewBuffer(packageJson))
	require.NoError(t, err, "failed to create request")

	req.Header.Add("X-GitHub-Event", "meta")
	req.Header.Add("X-GitHub-Delivery", "12345")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	require.NoError(t, err, "failed to make request")
	// We expect OK since we don't want to leak information about registered repositories
	require.Equal(t, http.StatusOK, resp.StatusCode, "unexpected status code")
	assert.Len(t, queued, 0)
}

func (s *UnitTestSuite) TestHandleWebHookRepository() {
	t := s.T()
	t.Parallel()

	p := gochannel.NewGoChannel(gochannel.Config{}, nil)
	queued, err := p.Subscribe(context.Background(), engine.InternalEntityEventTopic)
	if err != nil {
		t.Fatal(err)
	}
	defer p.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockStore := mockdb.NewMockStore(ctrl)

	mockStore.EXPECT().
		GetRepositoryByRepoID(gomock.Any(), gomock.Any()).
		Return(db.Repository{
			ID:      1,
			GroupID: 1,
			RepoID:  12345,
		}, nil)

	hook := HandleGitHubWebHook(p, mockStore)
	port, err := util.GetRandomPort()
	if err != nil {
		t.Fatal(err)
	}
	addr := fmt.Sprintf("localhost:%d", port)
	server := &http.Server{
		Addr:              fmt.Sprintf(":%d", port),
		Handler:           hook,
		ReadHeaderTimeout: 1 * time.Second,
	}
	go server.ListenAndServe()

	event := github.MetaEvent{
		Repo: &github.Repository{
			ID:   github.Int64(12345),
			Name: github.String("stacklok/mediator"),
		},
		Org: &github.Organization{
			Login: github.String("stacklok"),
		},
	}
	packageJson, err := json.Marshal(event)
	require.NoError(t, err, "failed to marshal package event")

	client := &http.Client{}
	req, err := http.NewRequest("POST", fmt.Sprintf("http://%s", addr), bytes.NewBuffer(packageJson))
	require.NoError(t, err, "failed to create request")

	req.Header.Add("X-GitHub-Event", "meta")
	req.Header.Add("X-GitHub-Delivery", "12345")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	require.NoError(t, err, "failed to make request")
	// We expect OK since we don't want to leak information about registered repositories
	require.Equal(t, http.StatusOK, resp.StatusCode, "unexpected status code")

	received := <-queued

	assert.Equal(t, "12345", received.Metadata["id"])
	assert.Equal(t, "meta", received.Metadata["type"])
	assert.Equal(t, "https://api.github.com/", received.Metadata["source"])
	assert.Equal(t, "github", received.Metadata["provider"])
	assert.Equal(t, "1", received.Metadata["group_id"])
	assert.Equal(t, "1", received.Metadata["repository_id"])

	// TODO: assert payload is RepositoryRecord protobuf

	assert.NoError(t, p.Close())
}

// We should ignore events from packages from repositories that are not registered
func (s *UnitTestSuite) TestHandleWebHookUnexistentRepoPackage() {
	t := s.T()
	t.Parallel()

	p := gochannel.NewGoChannel(gochannel.Config{}, nil)
	queued, err := p.Subscribe(context.Background(), engine.InternalEntityEventTopic)
	if err != nil {
		t.Fatal(err)
	}
	defer p.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockStore := mockdb.NewMockStore(ctrl)

	mockStore.EXPECT().
		GetRepositoryByRepoID(gomock.Any(), gomock.Any()).
		Return(db.Repository{}, sql.ErrNoRows)

	hook := HandleGitHubWebHook(p, mockStore)
	port, err := util.GetRandomPort()
	if err != nil {
		t.Fatal(err)
	}
	addr := fmt.Sprintf("localhost:%d", port)
	server := &http.Server{
		Addr:              fmt.Sprintf(":%d", port),
		Handler:           hook,
		ReadHeaderTimeout: 1 * time.Second,
	}
	go server.ListenAndServe()

	event := github.PackageEvent{
		Action: github.String("published"),
		Repo: &github.Repository{
			ID:   github.Int64(12345),
			Name: github.String("stacklok/mediator"),
		},
		Org: &github.Organization{
			Login: github.String("stacklok"),
		},
	}
	packageJson, err := json.Marshal(event)
	require.NoError(t, err, "failed to marshal package event")

	client := &http.Client{}
	req, err := http.NewRequest("POST", fmt.Sprintf("http://%s", addr), bytes.NewBuffer(packageJson))
	require.NoError(t, err, "failed to create request")

	req.Header.Add("X-GitHub-Event", "meta")
	req.Header.Add("X-GitHub-Delivery", "12345")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	require.NoError(t, err, "failed to make request")
	// We expect OK since we don't want to leak information about registered repositories
	require.Equal(t, http.StatusOK, resp.StatusCode, "unexpected status code")
	assert.Len(t, queued, 0)
}

func TestAll(t *testing.T) {
	t.Parallel()

	RunUnitTestSuite(t)
	// Call other test runner functions for additional test suites
}