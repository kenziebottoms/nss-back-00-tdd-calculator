"use strict";

const { assert } = require("chai");
const { add } = require("../js/add");

describe('add()', () => {
    it('should be a function', () => {
        assert.isFunction(add);
    });
});