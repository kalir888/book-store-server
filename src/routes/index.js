import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishRoute from './wishlist.route';
import orderRoute from './order.route';
import customerRoute from './customer.route';
import commentRoute from './comment.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome to BookStore');
  });
  router.use('/users', userRoute);
  router.use('/books', bookRoute);
  router.use('/carts', cartRoute);
  router.use('/wishlists', wishRoute);
  router.use('/orders', orderRoute);
  router.use('/customers', customerRoute);
  router.use('/comments', commentRoute);
  return router;
};

export default routes;
