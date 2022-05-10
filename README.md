oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g traktor
$ traktor COMMAND
running command...
$ traktor (--version)
traktor/0.0.0 darwin-x64 node-v16.13.2
$ traktor --help [COMMAND]
USAGE
  $ traktor COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
  - [`traktor hello PERSON`](#traktor-hello-person)
  - [`traktor hello world`](#traktor-hello-world)
  - [`traktor help [COMMAND]`](#traktor-help-command)
  - [`traktor plugins`](#traktor-plugins)
  - [`traktor plugins:install PLUGIN...`](#traktor-pluginsinstall-plugin)
  - [`traktor plugins:inspect PLUGIN...`](#traktor-pluginsinspect-plugin)
  - [`traktor plugins:install PLUGIN...`](#traktor-pluginsinstall-plugin-1)
  - [`traktor plugins:link PLUGIN`](#traktor-pluginslink-plugin)
  - [`traktor plugins:uninstall PLUGIN...`](#traktor-pluginsuninstall-plugin)
  - [`traktor plugins:uninstall PLUGIN...`](#traktor-pluginsuninstall-plugin-1)
  - [`traktor plugins:uninstall PLUGIN...`](#traktor-pluginsuninstall-plugin-2)
  - [`traktor plugins update`](#traktor-plugins-update)

## `traktor hello PERSON`

Say hello

```
USAGE
  $ traktor hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/chrisortiz11/traktor/blob/v0.0.0/dist/commands/hello/index.ts)_

## `traktor hello world`

Say hello world

```
USAGE
  $ traktor hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `traktor help [COMMAND]`

Display help for traktor.

```
USAGE
  $ traktor help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for traktor.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `traktor plugins`

List installed plugins.

```
USAGE
  $ traktor plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ traktor plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `traktor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ traktor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ traktor plugins add

EXAMPLES
  $ traktor plugins:install myplugin

  $ traktor plugins:install https://github.com/someuser/someplugin

  $ traktor plugins:install someuser/someplugin
```

## `traktor plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ traktor plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ traktor plugins:inspect myplugin
```

## `traktor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ traktor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ traktor plugins add

EXAMPLES
  $ traktor plugins:install myplugin

  $ traktor plugins:install https://github.com/someuser/someplugin

  $ traktor plugins:install someuser/someplugin
```

## `traktor plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ traktor plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ traktor plugins:link myplugin
```

## `traktor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ traktor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ traktor plugins unlink
  $ traktor plugins remove
```

## `traktor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ traktor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ traktor plugins unlink
  $ traktor plugins remove
```

## `traktor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ traktor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ traktor plugins unlink
  $ traktor plugins remove
```

## `traktor plugins update`

Update installed plugins.

```
USAGE
  $ traktor plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
