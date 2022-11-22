import { Navigate } from 'react-router-dom';

import { ContactList } from 'components/protected';
import { AppRoutes } from 'types/types';

export const ProtectedRoutes = [
  {
    children: [
      { path: AppRoutes.CONTACT_LIST, element: <ContactList /> },
      {
        path: '*',
        element: <Navigate to={AppRoutes.CONTACT_LIST} />,
      },
    ],
  },
];
