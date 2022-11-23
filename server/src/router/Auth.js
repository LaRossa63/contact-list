import { Router } from 'express';
import { body } from 'express-validator';

import { AuthController } from '../controllers/index.js';

export const AuthRouter = new Router();

AuthRouter.post(
  '/signup',
  body('fullName').isLength({ min: 4, max: 16 }),
  body('userName').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 4, max: 16 }),
  AuthController.signUp
);
AuthRouter.post(
  '/signin',
  body('userName').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 4, max: 16 }),
  AuthController.signIn
);
AuthRouter.post('/logout', AuthController.logout);
AuthRouter.get('/refresh', AuthController.refresh);
