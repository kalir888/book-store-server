import express from 'express';
import * as commentController from '../controllers/comment.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/:_id',commentController.getAllComments);

router.post('/:_id', userAuth, commentController.addComment);

export default router;