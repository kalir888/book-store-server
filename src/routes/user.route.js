import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

router.post('/signup', newUserValidator, userController.registerUser);

router.post('/signin', userController.loginUser);

export default router;
