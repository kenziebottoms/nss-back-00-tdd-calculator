"use strict";

const { assert } = require("chai");

const { add } = require("../js/add");
const { subtract } = require("../js/subtract");
const { multiply } = require("../js/multiply");

describe("add()", () => {
    it("should be a function", () => {
        assert.isFunction(add);
    });
    it("should return a number", () => {
        assert.isNumber(add(1, 2));
    });
    it("1 + (-2) should equal -1", () => {
        assert.equal(add(1, -2), -1);
    });
});

describe("subtract()", () => {
    it("should be a function", () => {
        assert.isFunction(subtract);
    });
    it("should return a number", () => {
        assert.isNumber(subtract(3,5));
    });
    it("3-1 should equal 2", () => {
        assert.equal(subtract(3,1),2);
    });
});

describe("multiply()", () => {
    it("should be a function", () => {
        assert.isFunction(multiply);
    });
    it("should return a number", () => {
        assert.isNumber(multiply(1,3));
    });
    it("2*3 should equal 6", () => {
        assert.equal(multiply(2,3),6);
    });
});