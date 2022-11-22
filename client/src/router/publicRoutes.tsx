import { SignIn, SignUp } from 'components/public';
import { AppRoutes } from 'types/types';

export const PublicRoutes = [
  {
    children: [
      { path: AppRoutes.SIGN_IN, element: <SignIn /> },
      { path: AppRoutes.SIGN_UP, element: <SignUp /> },
    ],
  },
];
