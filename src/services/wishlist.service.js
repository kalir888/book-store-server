import Book from '../models/book.model';
import WishList from '../models/wishlist.model';

export const addToWishList = async (bookId,userId) => {
    const bookToAdd = await Book.findById(bookId);
    if(bookToAdd == null) {
        throw Error('Book does no exist');
    }else {
        const checkWishList = await WishList.findOne({userId: userId});
        let wishlist = null;
        const book = {
            productId: bookId,
            description: bookToAdd.description,
            bookName: bookToAdd.bookName,
            author: bookToAdd.author,
            quantity: 1,
            price: bookToAdd.price
        };
        if(checkWishList == null) {
            wishlist = await WishList.create({userId: userId,books: [book],cart_total: 1});
            return wishlist;
        }else {
            const books = checkWishList.books;
            books.push(book);
            let booksTotal = 0;
            books.forEach((book) => {booksTotal = booksTotal + book.quantity});
            wishlist = await WishList.findOneAndUpdate({userId: userId},{books: books, cart_total: booksTotal},{new: true});
            return wishlist;
        }
    }
};

export const getWishList = async (userId) => {
    const data = await WishList.findOne({userId: userId})
    if(data == null) {
        throw Error('WishList not exist for the user')
    }
    return data;
};