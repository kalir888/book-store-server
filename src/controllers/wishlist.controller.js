import HttpStatus from 'http-status-codes';
import * as WishListService from '../services/wishlist.service';

export const addToWishList = async (req, res, next) => {
    try {
      const data = await WishListService.addToWishList(req.params._id, req.body.userId);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Book added to the WishList successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};

export const getWishList = async (req, res, next) => {
    try {
      const data = await WishListService.getWishList(req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'WishList fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};

export const deleteFromList = async (req, res, next) => {
    try {
      const data = await WishListService.deleteFromList(req.params._id, req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book deleted from wishlist successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};