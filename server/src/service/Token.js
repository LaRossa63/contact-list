import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

import { TokenModel } from '../models/index.js';

export const TokenService = {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
      expiresIn: '1d',
    });

    const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  },

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
  },

  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });

    return tokenData;
  },

  async validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
      return userData;
    } catch (error) {
      return null;
    }
  },

  async validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.SECRET_REFRESH_TOKEN);
      return userData;
    } catch (error) {
      return null;
    }
  },

  async findToken(refreshToken) {
    const tokenData = TokenModel.findOne({ refreshToken });
    return tokenData;
  },
};
