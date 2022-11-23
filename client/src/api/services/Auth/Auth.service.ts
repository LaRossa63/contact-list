import { Axios } from 'api';
import { LinksApi, ResponseAuthApi, SignInDto, SignUpDto } from 'types/types';

export const AuthService = {
  async checkAuth(): Promise<ResponseAuthApi> {
    return Axios.get(LinksApi.REFRESH_TOKEN);
  },

  async signUp(body: SignUpDto): Promise<ResponseAuthApi> {
    return Axios.post(LinksApi.SIGN_UP, body);
  },

  async signIn(body: SignInDto): Promise<ResponseAuthApi> {
    return Axios.post(LinksApi.SIGN_IN, body);
  },

  async logout(): Promise<void> {
    return Axios.post(LinksApi.LOGOUT);
  },
};
