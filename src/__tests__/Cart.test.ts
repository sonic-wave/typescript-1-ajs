import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Movie added to cart', () => {
    const movie = new Movie(11, "Avengers", 200, 2012, "США", "Avengers Assemble!", ["фантастика","боевик","фэнтези","приключения"], 137)
    const cart = new Cart();
    cart.add(movie);
    expect(cart).toEqual({"_items": [{
        "id": 11,
        "name": "Avengers",
        "price": 200,
        "year": 2012,
        "country": "США",
        "slogan": "Avengers Assemble!",
        "genre": [
            "фантастика",
            "боевик",
            "фэнтези",
            "приключения"
        ],
        "time": 137}]})
});

test('Cart sum', () => {
    const movie = new Movie(11, "Avengers", 200, 2012, "США", "Avengers Assemble!", ["фантастика","боевик","фэнтези","приключения"], 137)
    const cart = new Cart();
    cart.add(movie);
    const cartSum = cart.sum;
    expect(cartSum).toEqual(200);
});

test('Cart sum with discount', () => {
    const movie = new Movie(11, "Avengers", 200, 2012, "США", "Avengers Assemble!", ["фантастика","боевик","фэнтези","приключения"], 137)
    const cart = new Cart();
    cart.add(movie);
    const cartSum = cart.sumDiscount(10);
    expect(cartSum).toEqual(190);
});

test('Cart delete with id', () => {
    const movie = new Movie(11, "Avengers", 200, 2012, "США", "Avengers Assemble!", ["фантастика","боевик","фэнтези","приключения"], 137)
    const movie2 = new Movie(22, "Avengers", 200, 2012, "США", "Avengers Assemble!", ["фантастика","боевик","фэнтези","приключения"], 137)
    const cart = new Cart();
    cart.add(movie);
    cart.add(movie2);
    cart.remove(11);
    expect(cart).toEqual({"_items": [{
        "id": 22,
        "name": "Avengers",
        "price": 200,
        "year": 2012,
        "country": "США",
        "slogan": "Avengers Assemble!",
        "genre": [
            "фантастика",
            "боевик",
            "фэнтези",
            "приключения"
        ],
        "time": 137}]});
});