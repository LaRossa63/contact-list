import { Axios } from 'api';
import {
  LinksApi,
  ResponseDefaultContactListApi,
  ResponseFavouritesContactListApi,
} from 'types/types';

export const ContactService = {
  async getDefaultContactList(): Promise<ResponseDefaultContactListApi[]> {
    return Axios.get(LinksApi.DEFAULT_CONTACT_LIST);
  },

  async getFavouritesContactList(): Promise<
    ResponseFavouritesContactListApi[]
  > {
    return Axios.get(LinksApi.FAVOURITES_CONTACT_LIST);
  },

  async addFavouritesContactList(
    id: string
  ): Promise<ResponseFavouritesContactListApi[]> {
    return Axios.post(`${LinksApi.FAVOURITES_CONTACT_LIST}/${id}`);
  },

  async deleteFavouritesContactList(
    id: string
  ): Promise<ResponseFavouritesContactListApi> {
    return Axios.delete(`${LinksApi.FAVOURITES_CONTACT_LIST}/${id}`);
  },
};
