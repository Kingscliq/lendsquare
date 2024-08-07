import HomePage from '@pages/index';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './protected-routes';
import { useAuth } from '@hooks/useAuth';
import LoginPage from '@pages/login';
import UserProfile from '@features/Dashboard/widgets/user-profile';

const AppRoutes: React.FC<{}> = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path={routes.HOME}
        element={
          <ProtectedRoute isAllowed={user !== null} redirectPath={'/signin'}>
            <HomePage />
          </ProtectedRoute>
        }
      ></Route>
      <Route path={routes.SIGN_IN} element={<LoginPage />}></Route>
      <Route
        path={routes.USER}
        element={
          <ProtectedRoute isAllowed={user !== null} redirectPath={'/signin'}>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
