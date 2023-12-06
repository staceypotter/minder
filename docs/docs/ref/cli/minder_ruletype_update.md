---
title: minder ruletype update
---
## minder ruletype update

Update a rule type within a minder control plane

### Synopsis

The minder rule type update subcommand lets you update rule types for a project
within a minder control plane.

```
minder ruletype update [flags]
```

### Options

```
  -f, --file stringArray   Path to the YAML defining the rule type (or - for stdin). Can be specified multiple times. Can be a directory.
  -h, --help               help for update
```

### Options inherited from parent commands

```
      --config string            Config file (default is $PWD/config.yaml)
      --grpc-host string         Server host (default "api.stacklok.com")
      --grpc-insecure            Allow establishing insecure connections
      --grpc-port int            Server port (default 443)
      --identity-client string   Identity server client ID (default "minder-cli")
      --identity-url string      Identity server issuer URL (default "https://auth.stacklok.com")
```

### SEE ALSO

* [minder ruletype](minder_ruletype.md)	 - Manage rule types within a minder control plane
