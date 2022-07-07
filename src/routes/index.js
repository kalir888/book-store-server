import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishRoute from './wishlist.route';
import orderRoute from './order.route';
import customerRoute from './customer.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome to BookStore');
  });
  router.use('/users', userRoute);
  router.use('/books', bookRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishRoute);
  router.use('/order', orderRoute);
  router.use('/customer', customerRoute);
  return router;
};

export default routes;
