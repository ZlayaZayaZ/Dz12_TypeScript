"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telephone = /** @class */ (function () {
    function Telephone(id, name, price, isPhisiacal, count) {
        if (isPhisiacal === void 0) { isPhisiacal = true; }
        if (count === void 0) { count = 1; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.isPhisiacal = isPhisiacal;
        this.count = count;
    }
    return Telephone;
}());
exports.default = Telephone;
