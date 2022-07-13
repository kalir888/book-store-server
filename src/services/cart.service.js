import Book from '../models/book.model';
import Cart from '../models/cart.model';

export const addToCart = async (bookId,userId) => {
    const bookToAdd = await Book.findById(bookId);
    if(bookToAdd == null) {
        throw Error('Book does no exist');
    }else {
        const checkCart = await Cart.findOne({userId: userId});
        let cartData = null;
        const book = {
            productId: bookId,
            description: bookToAdd.description,
            discountPrice: bookToAdd.discountPrice,
            bookName: bookToAdd.bookName,
            bookImage: bookToAdd.bookImage,
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
    }
};

export const getCart = async (userId) => {
    const data = await Cart.findOne({userId: userId})
    if(data == null) {
        throw Error('Cart not exist for the user')
    }
    return data;
};

export const updateCart = async (bookId, userData) => {
    let cartData = await Cart.findOne({userId: userData.userId});
    if(cartData == null) {
        throw Error('Cart not exist for the user')
    }else {
        let books = cartData.books;
        let bookIndex = books.findIndex(book => book.productId == bookId);
        if(bookIndex == -1) {
            throw Error('Book does not exist in the cart')
        }else {
            let book = books[bookIndex];
            let booksTotal = 0;
            book.quantity = userData.quantity;
            books[bookIndex] = book;
            books.forEach((book) => {booksTotal = booksTotal + book.quantity});
            cartData = await Cart.findOneAndUpdate({userId: userData.userId},{books: books, cart_total: booksTotal},{new: true});
        }
    }
    return cartData;
};

export const deleteBook = async (bookId, userId) => {
    let cartData = await Cart.findOne({userId: userId});
    if(cartData == null) {
        throw Error('Cart not exist for the user')
    }else {
        let books = cartData.books;
        let bookIndex = books.findIndex(book => book.productId == bookId);
        if(bookIndex == -1) {
            throw Error('Book does not exist in the cart')
        } else {
            books.splice(bookIndex,1)
            let booksTotal = 0;
            books.forEach((book) => {booksTotal = booksTotal + book.quantity});
            cartData = await Cart.findOneAndUpdate({userId: userId},{books: books, cart_total: booksTotal},{new: true});
        }
    }
    return cartData;
};

