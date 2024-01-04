import HomePage from '@pages/index';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
