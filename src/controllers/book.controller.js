import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

export const getAllBooks = async (req, res, next) => {
    try {
      const data = await BookService.getAllBooks();
      console.log('getting from database');
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All books fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};