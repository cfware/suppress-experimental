# suppress-experimental [![NPM Version][npm-image]][npm-url]

Block Node.js experimental warnings from the current process

## Usage

Get node.js to require this module before any code which would emit experimental
warnings.  The best way is to add `--require=suppress-experimental` to the
`NODE_OPTIONS` environment.

## Target Use Case

This module is intended for use during testing.  This is especially useful when you have
a large number of test files each running in separate processes.

## Feature Complete

This module is feature complete and has no dependencies.  Future updates are very
unlikely.

[npm-image]: https://img.shields.io/npm/v/suppress-experimental.svg
[npm-url]: https://npmjs.org/package/suppress-experimental
