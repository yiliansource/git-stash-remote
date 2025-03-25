# git-stash-remote

A new CLI generated with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/git-stash-remote.svg)](https://npmjs.org/package/git-stash-remote)
[![Downloads/week](https://img.shields.io/npm/dw/git-stash-remote.svg)](https://npmjs.org/package/git-stash-remote)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
      <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g git-stash-remote
$ git-stash-remote COMMAND
running command...
$ git-stash-remote (--version)
git-stash-remote/0.0.0 win32-x64 node-v20.18.1
$ git-stash-remote --help [COMMAND]
USAGE
  $ git-stash-remote COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`git-stash-remote hello PERSON`](#git-stash-remote-hello-person)
- [`git-stash-remote hello world`](#git-stash-remote-hello-world)
- [`git-stash-remote help [COMMAND]`](#git-stash-remote-help-command)
- [`git-stash-remote plugins`](#git-stash-remote-plugins)
- [`git-stash-remote plugins add PLUGIN`](#git-stash-remote-plugins-add-plugin)
- [`git-stash-remote plugins:inspect PLUGIN...`](#git-stash-remote-pluginsinspect-plugin)
- [`git-stash-remote plugins install PLUGIN`](#git-stash-remote-plugins-install-plugin)
- [`git-stash-remote plugins link PATH`](#git-stash-remote-plugins-link-path)
- [`git-stash-remote plugins remove [PLUGIN]`](#git-stash-remote-plugins-remove-plugin)
- [`git-stash-remote plugins reset`](#git-stash-remote-plugins-reset)
- [`git-stash-remote plugins uninstall [PLUGIN]`](#git-stash-remote-plugins-uninstall-plugin)
- [`git-stash-remote plugins unlink [PLUGIN]`](#git-stash-remote-plugins-unlink-plugin)
- [`git-stash-remote plugins update`](#git-stash-remote-plugins-update)

## `git-stash-remote hello PERSON`

Say hello

```
USAGE
  $ git-stash-remote hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ git-stash-remote hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/yiliansource/git-stash-remote/blob/v0.0.0/src/commands/hello/index.ts)_

## `git-stash-remote hello world`

Say hello world

```
USAGE
  $ git-stash-remote hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ git-stash-remote hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/yiliansource/git-stash-remote/blob/v0.0.0/src/commands/hello/world.ts)_

## `git-stash-remote help [COMMAND]`

Display help for git-stash-remote.

```
USAGE
  $ git-stash-remote help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for git-stash-remote.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.27/src/commands/help.ts)_

## `git-stash-remote plugins`

List installed plugins.

```
USAGE
  $ git-stash-remote plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ git-stash-remote plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/index.ts)_

## `git-stash-remote plugins add PLUGIN`

Installs a plugin into git-stash-remote.

```
USAGE
  $ git-stash-remote plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into git-stash-remote.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GIT_STASH_REMOTE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GIT_STASH_REMOTE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ git-stash-remote plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ git-stash-remote plugins add myplugin

  Install a plugin from a github url.

    $ git-stash-remote plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ git-stash-remote plugins add someuser/someplugin
```

## `git-stash-remote plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ git-stash-remote plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ git-stash-remote plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/inspect.ts)_

## `git-stash-remote plugins install PLUGIN`

Installs a plugin into git-stash-remote.

```
USAGE
  $ git-stash-remote plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into git-stash-remote.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GIT_STASH_REMOTE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GIT_STASH_REMOTE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ git-stash-remote plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ git-stash-remote plugins install myplugin

  Install a plugin from a github url.

    $ git-stash-remote plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ git-stash-remote plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/install.ts)_

## `git-stash-remote plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ git-stash-remote plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ git-stash-remote plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/link.ts)_

## `git-stash-remote plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ git-stash-remote plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-stash-remote plugins unlink
  $ git-stash-remote plugins remove

EXAMPLES
  $ git-stash-remote plugins remove myplugin
```

## `git-stash-remote plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ git-stash-remote plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/reset.ts)_

## `git-stash-remote plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ git-stash-remote plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-stash-remote plugins unlink
  $ git-stash-remote plugins remove

EXAMPLES
  $ git-stash-remote plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/uninstall.ts)_

## `git-stash-remote plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ git-stash-remote plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-stash-remote plugins unlink
  $ git-stash-remote plugins remove

EXAMPLES
  $ git-stash-remote plugins unlink myplugin
```

## `git-stash-remote plugins update`

Update installed plugins.

```
USAGE
  $ git-stash-remote plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/update.ts)_

<!-- commandsstop -->
