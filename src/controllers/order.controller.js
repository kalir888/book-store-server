import HttpStatus from 'http-status-codes';
import * as OrderService from '../services/order.service';

export const placeOrder = async (req, res, next) => {
    try {
      const data = await OrderService.placeOrder(req.body.userId);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Placed order for the cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};