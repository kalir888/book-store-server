import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, cartController.getCart);

router.post('/:_id', userAuth, cartController.addToCart);

router.put('/:_id', userAuth, cartController.updateCart);

router.delete('/:_id', userAuth, cartController.deleteBook);

export default router;