"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorImpl = void 0;
var CalculatorImpl = /** @class */ (function () {
    function CalculatorImpl() {
    }
    CalculatorImpl.prototype.add = function (a, b) {
        return a + b;
    };
    CalculatorImpl.prototype.minus = function (a, b) {
        return a - b;
    };
    CalculatorImpl.prototype.multiple = function (a, b) {
        return a * b;
    };
    return CalculatorImpl;
}());
exports.CalculatorImpl = CalculatorImpl;
