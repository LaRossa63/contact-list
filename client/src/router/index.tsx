import { Navigate, useRoutes } from 'react-router-dom';

import { ProtectedRoutes } from './protectedRoutes';
import { PublicRoutes } from './publicRoutes';
import { AppRoutes } from 'types/types';
import { useCheckAuth } from 'api/services/Auth';

export const AppRouter = () => {
  const { data: isAuth } = useCheckAuth();

  const commonRoutes = [
    {
      path: '*',
      element: (
        <Navigate to={isAuth ? AppRoutes.CONTACT_LIST : AppRoutes.SIGN_IN} />
      ),
    },
  ];

  const routes = isAuth ? ProtectedRoutes : PublicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
