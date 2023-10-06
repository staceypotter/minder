## medic repo list

List repositories in the mediator control plane

### Synopsis

Repo list is used to register a repo with the mediator control plane

```
medic repo list [flags]
```

### Options

```
  -h, --help                help for list
  -l, --limit int32         Number of repos to display per page (default 20)
  -o, --offset int32        Offset of the repos to display
  -f, --output string       Output format (json or yaml)
  -g, --project-id string   ID of the project for repo registration
  -n, --provider string     Name for the provider to enroll
```

### Options inherited from parent commands

```
      --config string      config file (default is $PWD/config.yaml)
      --grpc-host string   Server host (default "staging.stacklok.dev")
      --grpc-insecure      Allow establishing insecure connections
      --grpc-port int      Server port (default 443)
```

### SEE ALSO

* [medic repo](medic_repo.md)	 - Manage repositories within a mediator control plane
