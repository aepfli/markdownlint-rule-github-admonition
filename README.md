# markdownlint-rule-github-admonition

Ensure proper GitHub admonition.

## Overview

Ensure nicely rendered Warnings and Notes for your markdown files.

## Installation

Use following command to install

```console
# TODO
npm install markdownlint-rule-github-admonition --save-dev
```

## Configuration

Rulename: `github-admonition`

Tags: `admonition`

Parameters:

* `admonitions`: admonitions we should check for (`string[]`,
  default `[ "Note", "Warning" ]`)
* `admonitionStart`: the usual starting string for admonition (`string`,
  default `"> **"`)
* `admonitionEnd`: the usual ending string for admonition (`string`,
  default `"**"`)

Faulty:

```markdown
> **NOTE:** this will be detected{github-admonition}

> **NOTE:**{github-admonition}
this will be detected

> **NOTE:**{github-admonition}
> this will be detected

**NOTE:** this will be detected{github-admonition}

**NOTE** this will be detected{github-admonition}

> **NOTE** this will be detected{github-admonition}

( **NOTE:** this will be detected){github-admonition}

(**NOTE:** this will be detected){github-admonition}
```

Correct:

```markdown
> **Note** this is the correct syntax

> **Note**
> this is the correct syntax
```

### rendered comparison

<!-- markdownlint-disable -->
**NOTE** this will be detected{github-admonition}

**NOTE this will be detected{github-admonition}**

> **NOTE** this will be detected{github-admonition}

( **NOTE:** this will be detected){github-admonition}

> **Note** this is the correct syntax

<!-- markdownlint-enable -->
## Usage

For usage with certain tools,
please refer to the documentation of [markdownlint](https://github.com/davidAnson/markdownlint),
markdownlint-cli or the tool you are planning to use.
