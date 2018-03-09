"use strict";

module.exports.multiply = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    if (!a || !b) return false;
    return a*b;
};