import { SignIn, SignUp } from 'components/public';
import { AppRoutes } from 'types/types';

export const PublicRoutes = [
  {
    children: [
      { path: AppRoutes.SIGNIN, element: <SignIn /> },
      { path: AppRoutes.SIGNUP, element: <SignUp /> },
    ],
  },
];
