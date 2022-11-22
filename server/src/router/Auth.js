import { Router } from 'express';
import { body } from 'express-validator';

import { AuthController } from '../controllers/index.js';

export const AuthRouter = new Router();

AuthRouter.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 16 }),
  body('nickName').isLength({ min: 3, max: 12 }),
  AuthController.signUp
);
AuthRouter.post('/signin', AuthController.signIn);
AuthRouter.post('/logout', AuthController.logout);
AuthRouter.get('/refresh', AuthController.refresh);
