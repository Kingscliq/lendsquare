import HomePage from '@pages/index';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './protected-routes';
import { useAuth } from '@hooks/useAuth';
import LoginPage from '@pages/login';

const AppRoutes: React.FC<{}> = () => {
  const user = useAuth();
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
    </Routes>
  );
};

export default AppRoutes;
