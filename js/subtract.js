"use strict";

module.exports.subtract = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    if (!a || !b) return false;
    return a-b;
};