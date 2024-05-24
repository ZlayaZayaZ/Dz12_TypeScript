import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Telephone from '../domain/Telephone';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('checking for adding a non-physical item with a negative quantity', () => {
  const cart = new Cart(); 
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, -1));
  expect(cart.items.length).toBe(1);
  expect(cart.items[0].count).toBe(1);
});

test('checking for adding a non-physical item with zero quantity', () => {
  const cart = new Cart(); 
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, 0));
  expect(cart.items.length).toBe(1);
  expect(cart.items[0].count).toBe(1);
});

test('checking for adding a physical product with a negative quantity', () => {
  const cart = new Cart(); 
  cart.add(new Telephone(158, "Nokia-6512", 7099, true, -3));
  expect(cart.items.length).toBe(0);
});

test('checking adding a physical product with zero quantity', () => {
  const cart = new Cart(); 
  cart.add(new Telephone(158, "Nokia-6512", 7099, true, 0));
  expect(cart.items.length).toBe(0);
});

test('checking the calculate function', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180));
  cart.add(new Telephone(158, "Nokia-6512", 7099, true, 2))
  expect(cart.calculate()).toBe(17297);
})

test('checking the calculateDiscount function', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180));
  cart.add(new Telephone(158, "Nokia-6512", 7099, true, 2))
  expect(cart.calculateDiscount(50)).toBe(8648.5);
})

describe('checking interaction between Book and cart classes', () => {
  test('checking whether a Book has been added to the cart', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    cart.add(book);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(book);
  })

  test('trying to add multiple instances', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 5);
    cart.add(book);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(book);
    expect(cart.items[0].count).toBe(1);
  })

  test('checking whether the Book has been removed from the trash', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.deleteProduct(1001);
    expect(cart.items.length).toBe(0);
  })

test('plusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.plusProduct(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 15));
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(1);
  })

  test('minusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false, 15));
    cart.minusProduct(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    expect(cart.items.length).toBe(0);
  })
})


describe('checking interaction between MusicAlbum and cart classes', () => {
  test('checking whether a MusicAlbum has been added to the cart', () => {
    const cart = new Cart();
    const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(music);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(music);
  })

  test('trying to add multiple instances', () => {
    const cart = new Cart();
    const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, 5);
    cart.add(music);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(music);
    expect(cart.items[0].count).toBe(1);
  })

  test('checking whether the MusicAlbum has been removed from the trash', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.deleteProduct(1008);
    expect(cart.items.length).toBe(0);
  })

test('plusProduct function check', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.plusProduct(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, 15));
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(1);
  })

  test('minusProduct function check', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false, 15));
    cart.minusProduct(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.items.length).toBe(0);
  })
})


describe('checking interaction between Movie and cart classes', () => {
  test('checking whether a Movie has been added to the cart', () => {
    const cart = new Cart();
    const movie = new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
  })

  test('trying to add multiple instances', () => {
    const cart = new Cart();
    const movie = new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180, false, 5);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
    expect(cart.items[0].count).toBe(1);
  })

  test('checking whether the MusicAlbum has been removed from the trash', () => {
    const cart = new Cart();
    cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180));
    cart.deleteProduct(33);
    expect(cart.items.length).toBe(0);
  })

test('plusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180));
    cart.plusProduct(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180, false, 15));
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(1);
  })

  test('minusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180, false, 15));
    cart.minusProduct(new Movie(33, 'Titanic', 199, 1985, 'США', "", "драмма", 180));
    expect(cart.items.length).toBe(0);
  })
})


describe('checking interaction between Telephone and cart classes', () => {
  test('checking whether a Telephone has been added to the cart', () => {
    const cart = new Cart();
    const telephone = new Telephone(158, "Nokia-6512", 7099, true, 5);
    cart.add(telephone);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(telephone);
    expect(cart.items[0].count).toBe(5);
  })

  test('checking whether the Book has been removed from the trash', () => {
    const cart = new Cart();
    cart.add(new Telephone(158, "Nokia-6512", 7099));
    cart.deleteProduct(158);
    expect(cart.items.length).toBe(0);
  })

test('plusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Telephone(158, "Nokia-6512", 7099));
    cart.plusProduct(new Telephone(158, "Nokia-6512", 7099, true, 15));
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(16);
  })

  test('minusProduct function check', () => {
    const cart = new Cart();
    cart.add(new Telephone(158, "Nokia-6512", 7099, true, 3));
    cart.minusProduct(new Telephone(158, "Nokia-6512", 7099));
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(2);
  })

  test('checking the minusProduct function remotely', () => {
    const cart = new Cart();
    cart.add(new Telephone(158, "Nokia-6512", 7099, true, 3));
    cart.minusProduct(new Telephone(158, "Nokia-6512", 7099, true, 3));
    expect(cart.items.length).toBe(0);
  })
})
