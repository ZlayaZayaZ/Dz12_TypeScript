"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./service/Cart");
var Book_1 = require("./domain/Book");
var MusicAlbum_1 = require("./domain/MusicAlbum");
var Movie_1 = require("./domain/Movie");
var Telephone_1 = require("./domain/Telephone");
var cart = new Cart_1.default();
console.log(cart.items);
cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 15));
cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900, false, 1));
cart.add(new Movie_1.default(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180, false, 1));
cart.add(new Telephone_1.default(158, "Nokia-6512", 7099, true, 2));
console.log(cart.items);
// cart.plusProduct(new Telephone(158, "Nokia-6512", 7099, true, 3))
// console.log(cart.items);
// cart.minusProduct(new Telephone(158, "Nokia-6512", 7099, true, 4))
// console.log(cart.items);
// cart.minusProduct(new Telephone(158, "Nokia-6512", 7099))
// console.log(cart.items);
// cart.plusProduct(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 15))
// cart.minusProduct(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 1))
// console.log(cart.items);
console.log("result", cart.calculate());
console.log("discount", cart.calculateDiscount(50));
cart.deleteProduct(33);
console.log(cart.items);
