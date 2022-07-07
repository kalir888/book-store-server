import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

export const addCustomer = async (req, res, next) => {
  try {
    const data = await CustomerService.addCustomer(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Customer info added successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};