import { dashUsers, userWithLoans, userWithSavings } from '@assets/icons';
import DashCard from '@components/elements/dash-card';
import TextField from '@components/elements/textfield';

const Overview = () => {
  return (
    <div>
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
      </div>

      <div>
        <TextField />
      </div>
    </div>
  );
};

export default Overview;
