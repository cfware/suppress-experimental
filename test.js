'use strict';

const assert = require('assert');

let warnings = 0;
process.emitWarning = (...args) => {
	warnings++;
};

process.emitWarning('Testing', 'ExperimentalWarning');
assert.strictEqual(warnings, 1);

process.emitWarning('Testing', {type: 'ExperimentalWarning'});
assert.strictEqual(warnings, 2);

require('./index.js');

process.emitWarning('Testing', 'ExperimentalWarning');
assert.strictEqual(warnings, 2);

process.emitWarning('Testing', {type: 'ExperimentalWarning'});
assert.strictEqual(warnings, 2);

process.emitWarning('Testing', {type: 'AnotherWarning'});
assert.strictEqual(warnings, 3);

process.emitWarning('Testing');
assert.strictEqual(warnings, 4);

console.log('Tests Completed');
