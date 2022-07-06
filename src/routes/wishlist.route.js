import express from 'express';
import * as wishListController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, wishListController.getWishList);

router.post('/:_id', userAuth, wishListController.addToWishList);

router.delete('/:_id', userAuth, wishListController.deleteFromList);

export default router;