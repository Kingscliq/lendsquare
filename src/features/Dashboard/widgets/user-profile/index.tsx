import { useState } from 'react';
import styles from './user-profile.module.scss';
import { OutlineButton } from '@components/elements/button';
import ReactStars from 'react-rating-star-with-type';
import { Avatar, Tabs } from '@radix-ui/themes';
import Info from './info';
import ComingSoon from './coming-soon';
import { useFilters } from '@hooks/useFilters';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const { getSingleUsers } = useFilters();

  const userInfo = getSingleUsers!(Number(id));

  const tabsData = [
    {
      id: 1,
      label: 'General Details',
      value: 'account',
      component: <Info item={userInfo!} />,
    },
    {
      id: 2,
      label: 'Documents',
      value: 'documents',
      component: <ComingSoon />,
    },
    {
      id: 3,
      label: 'Bank Details',
      value: 'bank-details',
      component: <ComingSoon />,
    },
    { id: 4, label: 'Loans', value: 'loans', component: <ComingSoon /> },
    { id: 5, label: 'Savings', value: 'savings', component: <ComingSoon /> },
    {
      id: 6,
      label: ' App and System',
      value: 'apps-systems',
      component: <ComingSoon />,
    },
  ];

  const navigate = useNavigate();
  return (
    <section className={styles.user__profile}>
      <button className="btn" onClick={() => navigate(-1)}>
        &larr; Back to Users
      </button>
      <div className={styles.profile__header}>
        <div>
          <h2>User Details</h2>
        </div>
        <div className={styles.profile__cta}>
          <OutlineButton label="Blacklist User" variant="danger" />
          <OutlineButton label="Activate User" variant="primary" />
        </div>
      </div>
      <div className={styles.profile__card}>
        <div className={styles.profile__menu}>
          <div className={styles.profile__name}>
            <div className={styles.avatar}>
              <Avatar
                src={userInfo?.avatar}
                fallback={userInfo?.fullname.split('')[0]!}
                size={'8'}
                radius="full"
              />
            </div>
            <div className={styles.name}>
              <h3>{userInfo?.fullname}</h3>
              <p>{userInfo?.username} </p>
            </div>
          </div>
          <div className={styles.tier}>
            <p>User Tier</p>
            <div>
              <ReactStars count={3} value={userInfo?.tier} />
            </div>
          </div>
          <div className={styles.balance__bank}>
            <h2>₦{userInfo?.monthly_income}</h2>
            <p>
              {userInfo?.account_number}/{userInfo?.bank_name}
            </p>
          </div>
        </div>
      </div>
      <Tabs.Root defaultValue="account">
        <section className={styles.tabs__list}>
          <Tabs.List>
            {tabsData.map(item => {
              return (
                <Tabs.Trigger
                  value={item.value}
                  className={styles.tabs}
                  key={item.id}
                >
                  {item.label}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </section>
        <section>
          {tabsData.map(item => {
            return (
              <Tabs.Content value={item.value}>{item.component}</Tabs.Content>
            );
          })}
        </section>
      </Tabs.Root>
    </section>
  );
};

export default UserProfile;
