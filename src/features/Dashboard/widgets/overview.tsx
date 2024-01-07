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
import { useUsersData } from '@hooks/useData';
import { useFilters } from '@hooks/useFilters';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import UserProfile from './user-profile';
import { IUserData } from '@/types/dataTable';

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
              return (
                <PopoverItem
                  label={item.label}
                  icon={item.icon}
                  key={item.label}
                />
              );
            })}
          </Ellipsis>
        ),
      },
    ],
    []
  );

  const users = useUsersData();

  const [FILTERS, FILTERS_ACTIONS, FILTERS_DATA] = useFilters();
  return (
    <div>
      <h3 className={'page-title'}>Users</h3>
      <div className="card-grid">
        <DashCard
          icon={dashUsers}
          title={'Users'}
          value={FILTERS_DATA?.filteredData?.length as unknown as string}
        />
        <DashCard
          icon={dashUsers}
          title={'Active Users'}
          value={FILTERS_DATA?.activeUsers as unknown as string}
        />
        <DashCard
          icon={userWithLoans}
          title={'Users with Loans'}
          value={FILTERS_DATA?.usersWithSavings as unknown as string}
        />
        <DashCard
          icon={userWithSavings}
          title={'Users with Savings'}
          value={FILTERS_DATA?.usersWithSavings as unknown as string}
        />
      </div>
      <TableComponent
        data={users.generatedData}
        columns={tableColumns}
        loading={false}
      />
      <UserProfile />
    </div>
  );
};

export default Overview;
