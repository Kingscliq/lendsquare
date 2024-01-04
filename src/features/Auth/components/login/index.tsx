import { useDataActions, useUsersData } from '@hooks/useData';
import React, { useEffect } from 'react';

const Login = () => {
  const data = useUsersData();

  const { setData } = useDataActions();

  useEffect(() => {
    setData();
  }, [setData]);

  console.log({ data });
  return <div>Login</div>;
};

export default Login;
