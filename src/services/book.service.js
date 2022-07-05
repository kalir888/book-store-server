import Book from '../models/book.model';

export const getAllBooks = async () => {
    const data = await Book.find();
      return data;
};