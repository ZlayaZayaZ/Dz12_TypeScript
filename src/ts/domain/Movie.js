"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie = /** @class */ (function () {
    function Movie(id, name, price, release, country, tagline, genre, time, isPhisiacal, count) {
        if (isPhisiacal === void 0) { isPhisiacal = false; }
        if (count === void 0) { count = 1; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.release = release;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.time = time;
        this.isPhisiacal = isPhisiacal;
        this.count = count;
    }
    return Movie;
}());
exports.default = Movie;
