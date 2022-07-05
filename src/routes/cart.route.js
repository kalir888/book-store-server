import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, cartController.getCart);

router.delete('', userAuth, cartController.deleteCart);

router.post('/:_id', userAuth, cartController.addToCart);

router.put('/:_id', userAuth, cartController.updateCart);

export default router;