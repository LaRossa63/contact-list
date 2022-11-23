import bcrypt from 'bcrypt';

import { TokenService } from './index.js';
import { AuthModel } from '../models/index.js';
import { AuthDto } from '../dto/index.js';
import { ApiError } from '../exceptions/index.js';

export const AuthService = {
  async signUp(userName, fullName, password) {
    const candidateUserName = await AuthModel.findOne({ userName });
    if (candidateUserName) {
      throw ApiError.BadRequest('Данное имя уже используется');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const newUser = await AuthModel.create({
      userName,
      fullName,
      password: hashPassword,
    });
    const userDTO = new AuthDto(newUser);
    const tokens = await TokenService.generateTokens({ ...userDTO });

    await TokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { user: userDTO, ...tokens };
  },

  async signIn(userName, password) {
    const candidate = await AuthModel.findOne({ userName });

    if (!candidate) {
      throw ApiError.BadRequest('Пользователь с таким именем нету!');
    }

    const isPasswordValid = await bcrypt.compare(password, candidate.password);

    if (!isPasswordValid) {
      throw ApiError.BadRequest('Неверный пароль');
    }

    const userDTO = new AuthDto(candidate);
    const tokens = await TokenService.generateTokens({ ...userDTO });

    await TokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { user: userDTO, ...tokens };
  },

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);

    return token;
  },

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = await TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await AuthModel.find({ userName: userData.userName });

    const userDto = new AuthDto(user);
    const tokens = await TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.userName, tokens.refreshToken);
    return { user: userDto, ...tokens };
  },
};
