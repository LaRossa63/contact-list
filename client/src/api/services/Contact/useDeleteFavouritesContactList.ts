import { useMutation } from 'react-query';

import { queryClient } from 'api/Axios';
import { KeyApi, ResponseFavouritesContactListApi } from 'types/types';
import { ContactService } from './Contact.service';

export const useDeleteFavouritesContactList = () => {
  return useMutation({
    onMutate: (id) => {
      queryClient.cancelQueries(KeyApi.FAVOURITES_CONTACT_LIST);

      const oldFavouritesContact = queryClient.getQueryData(
        KeyApi.FAVOURITES_CONTACT_LIST
      ) as ResponseFavouritesContactListApi[];

      queryClient.setQueryData(
        KeyApi.FAVOURITES_CONTACT_LIST,
        oldFavouritesContact.filter((element) => element._id !== id)
      );

      return oldFavouritesContact;
    },

    onError: (error, value, oldFavouritesContact) => {
      queryClient.setQueryData(
        KeyApi.FAVOURITES_CONTACT_LIST,
        oldFavouritesContact
      );
    },

    mutationFn: ContactService.deleteFavouritesContactList,
  });
};
