"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        if (item.isPhisiacal) {
            if (item.count > 0) {
                this._items.push(item);
            }
        }
        else {
            item.count = 1;
            this._items.push(item);
        }
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.calculate = function () {
        var result = 0;
        // const cart = this.items
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            result += item.price * item.count;
        }
        return result;
    };
    Cart.prototype.calculateDiscount = function (discount) {
        return this.calculate() * discount * 0.01;
    };
    Cart.prototype.deleteProduct = function (id) {
        var index = this.items.findIndex(function (el) { return el.id === id; });
        this._items.splice(index, 1);
    };
    Cart.prototype.plusProduct = function (item) {
        var index = this.items.findIndex(function (el) { return el.id === item.id; });
        if (index === -1) {
            this.add(item);
        }
        if (item.isPhisiacal) {
            this.items[index].count += item.count;
        }
    };
    Cart.prototype.minusProduct = function (item) {
        var index = this.items.findIndex(function (el) { return el.id === item.id; });
        if (index > -1) {
            this.items[index].count -= item.count;
            if (this.items[index].count < 1) {
                this.deleteProduct(item.id);
            }
        }
    };
    return Cart;
}());
exports.default = Cart;
