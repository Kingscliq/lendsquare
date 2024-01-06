import { IUserData } from '@/types/datatable';
import {
  activateUsers,
  blackListUser,
  dashUsers,
  eye,
  userWithLoans,
  userWithSavings,
} from '@assets/icons';
import Badge from '@components/elements/badge';
import DashCard from '@components/elements/dash-card';
import Ellipsis from '@components/elements/popover';
import PopoverItem from '@components/elements/popover/item';
import TableComponent from '@components/elements/table';
import Filter from '@components/widget/filter';
import { useUsersData } from '@hooks/useData';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

const Overview = () => {
  const menuItems = [
    {
      label: 'View Details',
      icon: eye,
    },
    {
      label: 'Blacklist Users',
      icon: blackListUser,
    },
    {
      label: 'Activate Users',
      icon: activateUsers,
    },
  ];

  const tableColumns = React.useMemo<ColumnDef<IUserData>[]>(
    () => [
      {
        header: 'Organisation',
        accessorKey: 'organisation',
      },
      {
        header: 'Username',
        accessorKey: 'username',
        cell: info => info.getValue(),
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: info => info?.getValue(),
      },
      {
        header: 'Phone',
        accessorKey: 'phone',
        cell: info => info?.getValue(),
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: info => (
          <Badge
            text={info?.getValue() as string}
            status={info?.getValue() as string}
          />
        ),
      },
      {
        header: '',
        accessorKey: 'ellipsis',
        cell: info => (
          <Ellipsis>
            {menuItems.map(item => {
              return <PopoverItem label={item.label} icon={item.icon} />;
            })}
          </Ellipsis>
        ),
      },
    ],
    []
  );

  const users = useUsersData();

  console.log(users);
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

      <TableComponent
        data={users.generatedData}
        columns={tableColumns}
        loading={false}
      />
      <Filter />
    </div>
  );
};

export default Overview;
