import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { ContactService } from './Contact.service';

export const useGetDefaultContactList = () => {
  return useQuery({
    queryKey: KeyApi.DEFAULT_CONTACT_LIST,
    queryFn: ContactService.getDefaultContactList,
  });
};
