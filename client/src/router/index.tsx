import { useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ProtectedRoutes } from './protectedRoutes';
import { PublicRoutes } from './publicRoutes';
import { AppRoutes } from 'types/types';

export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);

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
