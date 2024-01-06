import React from 'react';
import styles from './login.module.scss';
import TextField from '@components/elements/textfield';
import { Link } from 'react-router-dom';
import Button from '@components/elements/button';
const Form = () => {
  return (
    <div className={styles.form__container}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <div>
          <div className={styles.input__container}>
            <TextField inputClass={styles.input} />
          </div>
          <div className={styles.input__container}>
            <TextField inputClass={styles.input} />
          </div>
          <div className={styles.link}>
            <Link to={'/'}>Forgot Password</Link>
          </div>
        </div>
        <div>
          <Button label="LOG IN" />
        </div>
      </div>
    </div>
  );
};

export default Form;
