export enum LinksApi {
  BASE_URL = 'http://localhost:4000/api',

  SIGN_UP = '/signup',
  SIGN_IN = '/signin',
  LOGOUT = '/logout',
  REFRESH_TOKEN = '/refresh',

  DEFAULT_CONTACT_LIST = '/default_contact_list',
  FAVOURITES_CONTACT_LIST = '/favourites_contact_list',
}

export enum KeyApi {
  CHECK_AUTH = 'auth',

  DEFAULT_CONTACT_LIST = 'default_contact_list',
  FAVOURITES_CONTACT_LIST = 'favourites_contact_list',
}

export enum AppRoutes {
  SIGN_UP = '/signup',
  SIGN_IN = '/signin',

  CONTACT_LIST = '/',
}

export interface SignUpDto {
  fullName: string;
  userName: string;
  password: string;
}

export interface SignInDto extends Omit<SignUpDto, 'fullName'> {}

export interface ResponseUserApi {
  id: string;
  email: string;
  nickName: string;
}

export interface ResponseAuthApi {
  user: ResponseUserApi;

  accessToken: string;
  refreshToken: string;
}

interface ResponseContactListApi {
  _id: string;
  name: string;
  tel: string;
}

export interface ResponseDefaultContactListApi extends ResponseContactListApi {}

export interface ResponseFavouritesContactListApi
  extends ResponseContactListApi {}

export enum ValidValue {
  MIN_FULL_NAME = 4,
  MAX_FULL_NAME = 16,

  MIN_USER_NAME = 4,
  MAX_USER_NAME = 16,

  MIN_PASSWORD = 4,
  MAX_PASSWORD = 16,
}
