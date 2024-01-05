import HomePage from '@pages/index';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './protected-routes';
import { useAuth } from '@hooks/useAuth';

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
      <Route path={routes.HOME} element={<HomePage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
