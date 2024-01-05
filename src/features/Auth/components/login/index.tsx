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
  return (
    <div className="card-grid">
      <DashCard icon={dashUsers} title={'Users'} value={'2,343'} />
      <DashCard icon={dashUsers} title={'Active Users'} value={'3,456'} />
      <DashCard
        icon={userWithLoans}
        title={'Users with Loans'}
        value={'2,345'}
      />
      <DashCard
        icon={userWithSavings}
        title={'Users with Savings'}
        value={'2,345'}
      />

      <TextField />
    </div>
  );
};

export default Login;
