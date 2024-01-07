import { useState } from 'react';
import styles from './user-profile.module.scss';
import Button, { OutlineButton } from '@components/elements/button';
import { profile } from '@assets/icons';
import ReactStars from 'react-rating-star-with-type';
import { Tabs } from '@radix-ui/themes';
import Info from './info';
import ComingSoon from './coming-soon';

const UserProfile = () => {
  const tabsData = [
    { id: 1, label: 'General Details', value: 'account', component: <Info /> },
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

  const [star, setStar] = useState<number>(2);

  const onChange = (nextValue: any) => {
    setStar(nextValue);
  };

  return (
    <section className={styles.user__profile}>
      <div className={styles.profile__header}>
        <div>User Details</div>
        <div className={styles.profile__cta}>
          <OutlineButton label="Activate User" />
          <OutlineButton label="Blacklist User" />
        </div>
      </div>
      <div className={styles.profile__card}>
        <div className={styles.profile__menu}>
          <div className={styles.profile__name}>
            <div className={styles.avatar}>
              <img src={profile} alt="User" />
            </div>
            <div className={styles.name}>
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90 </p>
            </div>
          </div>
          <div className={styles.tier}>
            <p>User Tier</p>
            <div>
              <ReactStars count={3} onChange={onChange} value={star} />
            </div>
          </div>
          <div className={styles.balance__bank}>
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
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
