import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

router.get('', bookController.getAllBooks);

export default router;