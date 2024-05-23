"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicAlbum = /** @class */ (function () {
    function MusicAlbum(id, name, author, price, isPhisiacal, count) {
        if (isPhisiacal === void 0) { isPhisiacal = false; }
        if (count === void 0) { count = 1; }
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.isPhisiacal = isPhisiacal;
        this.count = count;
    }
    return MusicAlbum;
}());
exports.default = MusicAlbum;
