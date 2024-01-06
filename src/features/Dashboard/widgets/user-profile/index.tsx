import React, { useState } from 'react';
import styles from './user-profile.module.scss';
import Button from '@components/elements/button';
import { activateUsers } from '@assets/icons';
import ReactStars from 'react-rating-star-with-type';
import { Box, Tabs, Text } from '@radix-ui/themes';

const UserProfile = () => {
  const [star, setStar] = useState<number>(5);

  const onChange = (nextValue: any) => {
    setStar(nextValue);
  };
  return (
    <section className={styles.user__profile}>
      <div className={styles.profile__header}>
        <div>User Details</div>
        <div>
          <Button />
        </div>
      </div>
      <div className={styles.profile__card}>
        <div className={styles.profile__menu}>
          <div className={styles.profile__name}>
            <div>
              <img src={activateUsers} height={100} width={100} alt="User" />
            </div>
            <div>
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90 </p>
            </div>
          </div>
          <div className={styles.tier}>
            <p>User Tier</p>
            <div>
              <ReactStars count={3} onChange={onChange} value={2} />
            </div>
          </div>
          <div className={styles.balance__bank}>
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger
              value="account"
              color="#39cdcc"
              className={styles.tabs}
            >
              Account
            </Tabs.Trigger>
            <Tabs.Trigger
              value="documents"
              color="#39cdcc"
              className={styles.tabs}
            >
              Documents
            </Tabs.Trigger>
            <Tabs.Trigger
              value="settings"
              color="#39cdcc"
              className={styles.tabs}
            >
              Settings
            </Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="account">
              <Text size="2">Make changes to your account.</Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default UserProfile;
