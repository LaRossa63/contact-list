import { useMutation } from 'react-query';

import { queryClient } from 'api/Axios';
import {
  KeyApi,
  ResponseDefaultContactListApi,
  ResponseFavouritesContactListApi,
} from 'types/types';
import { ContactService } from './Contact.service';

export const useAddFavouritesContactList = () => {
  return useMutation({
    onMutate: (id) => {
      queryClient.cancelQueries(KeyApi.FAVOURITES_CONTACT_LIST);

      const defaultContact = queryClient.getQueryData(
        KeyApi.DEFAULT_CONTACT_LIST
      ) as ResponseDefaultContactListApi[];

      const newFavouritesContact = defaultContact.filter(
        (element) => element._id === id
      );

      const oldFavouritesContact = queryClient.getQueryData(
        KeyApi.FAVOURITES_CONTACT_LIST
      ) as ResponseFavouritesContactListApi[];

      const isContact = oldFavouritesContact.find(
        (element) => element._id === id
      );

      if (!isContact) {
        queryClient.setQueryData(KeyApi.FAVOURITES_CONTACT_LIST, [
          ...oldFavouritesContact,
          ...newFavouritesContact,
        ]);
      }

      return oldFavouritesContact;
    },

    onError: (error, value, oldFavouritesContact) => {
      queryClient.setQueryData(
        KeyApi.FAVOURITES_CONTACT_LIST,
        oldFavouritesContact
      );
    },

    mutationFn: ContactService.addFavouritesContactList,
  });
};
