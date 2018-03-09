"use strict";

const { assert } = require("chai");
const { add } = require("../js/add");

describe('add()', () => {
    it('should be a function', () => {
        assert.isFunction(add);
    });
    it('should return a number', () => {
        assert.isNumber(add(1, 2));
    });
    it('should work with negative numbers', () => {
        assert.equal(add(1, -2), -1);
    });
});