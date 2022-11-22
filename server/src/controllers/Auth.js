import * as dotenv from 'dotenv';
dotenv.config();
import { validationResult } from 'express-validator';

import { AuthService } from '../service/index.js';

export const AuthController = {
  async signUp(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Заполните все поля', errors.array()));
      }

      const { email, nickName, password } = req.body;

      const response = await AuthService.signUp(email, nickName, password);
      res.cookie('refreshToken', response.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const response = await AuthService.signIn(email, password);

      res.cookie('refreshToken', response.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await AuthService.logout(refreshToken);
      res.clearCookie('refreshToken');

      return res.json(token);
    } catch (error) {
      next(error);
    }
  },

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await AuthService.refresh(refreshToken);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  },
};
