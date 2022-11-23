import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { ContactService } from './Contact.service';

export const useGetFavouritesContactList = () => {
  return useQuery({
    queryKey: KeyApi.FAVOURITES_CONTACT_LIST,
    queryFn: ContactService.getFavouritesContactList,
  });
};
