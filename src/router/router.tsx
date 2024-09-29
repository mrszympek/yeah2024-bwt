import { createBrowserRouter } from 'react-router-dom';
import { WelcomeScreen } from '@/pages/welcome';
import { Dashboard } from '@/pages/dashboard';
import { Routes } from '@/shared/enums';
import { Login } from '@/pages/auth';
import { Demo } from '@/pages/demo';

export const router = createBrowserRouter([
  {
    element: <WelcomeScreen />,
    path: Routes.HOME,
  },
  {
    element: <Dashboard />,
    path: `${Routes.DASHBOARD}/:userId/:id`,
  },
  {
    element: <Demo />,
    path: Routes.DEMO,
  },
  {
    element: <Login />,
    path: Routes.LOGIN,
  },
]);
