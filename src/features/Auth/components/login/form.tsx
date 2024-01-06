import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styles from './login.module.scss';
import TextField from '@components/elements/textfield';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/elements/button';

const Form = () => {
  const navigate = useNavigate();

  interface FormValues {
    username: string;
    password: string;
  }

  const intitalValues: FormValues = {
    username: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('password is required'),
  });

  const { handleSubmit, handleChange, values, errors, touched } =
    useFormik<FormValues>({
      initialValues: intitalValues,
      validationSchema: loginSchema,
      onSubmit: async (values: FormValues) => {
        if (errors.password || errors.username) {
          console.log(values);
        }
      },
    });

  return (
    <form className={styles.form__container} onSubmit={handleSubmit}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <div>
          <div className={styles.input__container}>
            <TextField
              inputClass={styles.input}
              value={values.username}
              placeholder="Enter Username"
              name="username"
              error={!!errors?.username && touched?.username}
              onChange={handleChange}
              message={errors.username}
            />
          </div>
          <div className={styles.input__container}>
            <TextField
              inputClass={styles.input}
              value={values.password}
              placeholder="Enter Password"
              name="password"
              error={!!errors?.password && touched?.password}
              onChange={handleChange}
              message={errors.password}
            />
          </div>
          <div className={styles.link}>
            <Link to={'/'}>Forgot Password</Link>
          </div>
        </div>
        <div>
          <Button label="LOG IN" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;