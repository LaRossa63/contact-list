import { useQuery } from 'react-query';

import { queryClient } from 'api/Axios';
import { KeyApi } from 'types/types';
import { AuthService } from './Auth.service';

export const useCheckAuth = () => {
  return useQuery({
    queryKey: KeyApi.CHECK_AUTH,
    queryFn: AuthService.checkAuth,

    onSuccess: (data) => {
      localStorage.setItem('token', data?.accessToken);
    },

    onError: () => {
      queryClient.setQueryData(KeyApi.CHECK_AUTH, null);
    },
  });
};
