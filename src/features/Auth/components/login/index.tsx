import React from 'react';

import { useDataActions } from '@hooks/useData';
import { useEffect } from 'react';
import styles from './login.module.scss';
import { logo } from '@assets/icons';
import { hero } from '@assets/images';
import Form from './form';

const Login = () => {
  const { setData } = useDataActions();

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.hero}>
        <div>
          <div className={styles.logo}>
            <img src={logo} alt="Lendsqr logo" />
          </div>
          <div>
            <img src={hero} alt="Lendsqr hero" />
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
};

export default Login;
