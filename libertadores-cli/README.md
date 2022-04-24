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
$ npm install -g libertadores-cli
$ libertadores-cli COMMAND
running command...
$ libertadores-cli (--version)
libertadores-cli/0.0.0 darwin-x64 node-v14.18.3
$ libertadores-cli --help [COMMAND]
USAGE
  $ libertadores-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`libertadores-cli hello PERSON`](#libertadores-cli-hello-person)
* [`libertadores-cli hello world`](#libertadores-cli-hello-world)
* [`libertadores-cli help [COMMAND]`](#libertadores-cli-help-command)
* [`libertadores-cli plugins`](#libertadores-cli-plugins)
* [`libertadores-cli plugins:install PLUGIN...`](#libertadores-cli-pluginsinstall-plugin)
* [`libertadores-cli plugins:inspect PLUGIN...`](#libertadores-cli-pluginsinspect-plugin)
* [`libertadores-cli plugins:install PLUGIN...`](#libertadores-cli-pluginsinstall-plugin-1)
* [`libertadores-cli plugins:link PLUGIN`](#libertadores-cli-pluginslink-plugin)
* [`libertadores-cli plugins:uninstall PLUGIN...`](#libertadores-cli-pluginsuninstall-plugin)
* [`libertadores-cli plugins:uninstall PLUGIN...`](#libertadores-cli-pluginsuninstall-plugin-1)
* [`libertadores-cli plugins:uninstall PLUGIN...`](#libertadores-cli-pluginsuninstall-plugin-2)
* [`libertadores-cli plugins update`](#libertadores-cli-plugins-update)

## `libertadores-cli hello PERSON`

Say hello

```
USAGE
  $ libertadores-cli hello [PERSON] -f <value>

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

_See code: [dist/commands/hello/index.ts](https://github.com/akbarnafisaj/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `libertadores-cli hello world`

Say hello world

```
USAGE
  $ libertadores-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `libertadores-cli help [COMMAND]`

Display help for libertadores-cli.

```
USAGE
  $ libertadores-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for libertadores-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `libertadores-cli plugins`

List installed plugins.

```
USAGE
  $ libertadores-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ libertadores-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `libertadores-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ libertadores-cli plugins:install PLUGIN...

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
  $ libertadores-cli plugins add

EXAMPLES
  $ libertadores-cli plugins:install myplugin

  $ libertadores-cli plugins:install https://github.com/someuser/someplugin

  $ libertadores-cli plugins:install someuser/someplugin
```

## `libertadores-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ libertadores-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ libertadores-cli plugins:inspect myplugin
```

## `libertadores-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ libertadores-cli plugins:install PLUGIN...

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
  $ libertadores-cli plugins add

EXAMPLES
  $ libertadores-cli plugins:install myplugin

  $ libertadores-cli plugins:install https://github.com/someuser/someplugin

  $ libertadores-cli plugins:install someuser/someplugin
```

## `libertadores-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ libertadores-cli plugins:link PLUGIN

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
  $ libertadores-cli plugins:link myplugin
```

## `libertadores-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ libertadores-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ libertadores-cli plugins unlink
  $ libertadores-cli plugins remove
```

## `libertadores-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ libertadores-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ libertadores-cli plugins unlink
  $ libertadores-cli plugins remove
```

## `libertadores-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ libertadores-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ libertadores-cli plugins unlink
  $ libertadores-cli plugins remove
```

## `libertadores-cli plugins update`

Update installed plugins.

```
USAGE
  $ libertadores-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
