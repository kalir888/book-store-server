import Book from '../models/book.model';
import Cart from '../models/cart.model';

export const addToCart = async (bookId,userId) => {
    const bookToAdd = await Book.findOne({_id: bookId});
    const checkCart = await Cart.findOne({userId: userId});
    let cartData = null;
    const book = {
        productId: bookId,
        description: bookToAdd.description,
        bookName: bookToAdd.bookName,
        author: bookToAdd.author,
        quantity: 1,
        price: bookToAdd.price
    };
    if(checkCart == null) {
        cartData = await Cart.create({userId: userId,books: [book],cart_total: 1});
        return cartData;
    }else {
        const books = checkCart.books;
        books.push(book);
        let booksTotal = 0;
        books.forEach((book) => {booksTotal = booksTotal + book.quantity});
        cartData = await Cart.findOneAndUpdate({userId: userId},{books: books, cart_total: booksTotal},{new: true});
        return cartData;
    }
};

export const getCart = async (userId) => {
    const data = await Cart.findOne({userId: userId});
    return data;
};

export const updateCart = async (bookId,userId,quantity) => {
    let cartData = await Cart.findOne({userId: userId});
    let books = cartData.books
    let bookIndex = books.findIndex(book => book._id == bookId);
    let book = books[bookIndex];
    let booksTotal = 0;
    book.quantity = quantity;
    books[bookIndex] = book;
    books.forEach((book) => {booksTotal = booksTotal + book.quantity});
    cartData = await Cart.findOneAndUpdate({userId: userId},{books: books, cart_total: booksTotal},{new: true});
    return cartData;
}

