"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, name, author, price, pages, isPhisiacal, count) {
        if (isPhisiacal === void 0) { isPhisiacal = false; }
        if (count === void 0) { count = 1; }
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.pages = pages;
        this.isPhisiacal = isPhisiacal;
        this.count = count;
    }
    return Book;
}());
exports.default = Book;
