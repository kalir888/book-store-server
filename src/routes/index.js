import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishRoute from './wishlist.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome to BookStore');
  });
  router.use('/users', userRoute);
  router.use('/books', bookRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishRoute);
  return router;
};

export default routes;
