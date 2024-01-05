import { dashUsers, userWithLoans, userWithSavings } from '@assets/icons';
import DashCard from '@components/elements/dash-card';
import TextField from '@components/elements/textfield';
import { useDataActions, useUsersData } from '@hooks/useData';
import { useEffect } from 'react';

const Login = () => {
  const data = useUsersData();

  const { setData } = useDataActions();

  useEffect(() => {
    setData();
  }, []);

  console.log({ data });
  return <div>hello</div>;
};

export default Login;
