import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

router.get('', bookController.getAllBooks);

router.get('/:_id', bookController.getBook);

export default router;