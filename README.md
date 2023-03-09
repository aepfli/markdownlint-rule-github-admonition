# markdownlint-rule-template

A template to easily generate rules for [markdownlint](https://github.com/davidAnson/markdownlint).

If you want to use it, 

1. fork it, copy it, etc.
2. take a look at the TODOs
   - [ ] Adapt this Readme
   - [ ] Adapt [package.json](package.json)
   - [ ] Adapt [Code of Conduct](./CODE_OF_CONDUCT.md)
   - [ ] Adapt [rule.js](./rule.js)
3. Implement your rule in [rule.js](./rule.js) (and write tests based on )
4. Write tests (you can do this before writing the rule) based on the examples
    - [example configuration](test/example-test.json)
    - [example markdwon](test/example-test.md)
5. When you are done, there is already a GitHub Action for releasing.
    It needs a secret called `npm_token` for the npm.js-registry.

> **Note**
> Everything in here should help and guide you.
> Adapt everything based on your needs.
> This should help with an initial project setup.

> **Note**
> Feedback is always welcome

## Overview

This section should be used to shortly describe this plugin

## Installation

Use following command to install

```console
# TODO
npm install <rulename> --save-dev
```

## Configuration

Tags: <tags>

Parameters: <parameters>

```diff
Example of what this rule should do.
```

## Usage

For usage with certain tools,
please refer to the documentation of [markdownlint](https://github.com/davidAnson/markdownlint),
markdownlint-cli or the tool you are planning to use.
