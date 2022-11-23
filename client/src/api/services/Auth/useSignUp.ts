import { useMutation } from 'react-query';

import { queryClient } from 'api/Axios';
import { KeyApi } from 'types/types';
import { AuthService } from './Auth.service';

export const useSignUp = (callback: (error: any) => void) => {
  return useMutation({
    onSuccess: (data) => {
      localStorage.setItem('token', data.accessToken);
      queryClient.setQueryData(KeyApi.CHECK_AUTH, data);
    },

    onError: (error) => callback(error),

    mutationFn: AuthService.signUp,
  });
};
