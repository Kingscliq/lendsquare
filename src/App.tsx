import Layout from '@components/layout';
import AppRoutes from '@components/router';
import React, { Fragment } from 'react';

const App: React.FC<{}> = () => {
  return (
    <Fragment>
      <Layout>
        <AppRoutes />
      </Layout>
    </Fragment>
  );
};

export default App;
