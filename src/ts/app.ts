import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Telephone from './domain/Telephone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 15));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, 1));
cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180, false, 1))
cart.add(new Telephone(158, "Nokia-6512", 7099, true, 2))
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

console.log("result", cart.calculate())
console.log("discount", cart.calculateDiscount(50))

cart.deleteProduct(33)
console.log(cart.items);
