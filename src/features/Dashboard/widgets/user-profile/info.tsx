import React from 'react';

import { IUserData } from '@/types/dataTable';
import styles from './user-profile.module.scss';
import Card from '@components/elements/card';
import { useMemo } from 'react';

interface InfoProps {
  item: IUserData;
}
const Info: React.FC<InfoProps> = ({ item }) => {
  console.log({ item });

  const {
    fullname,
    gurarantors_email_address,
    gurarantors_fullname,
    gurarantors_phone_number,
    email,
    phone,
    marital_status,
    bvn,
    gender,
    type_of_residence,
    children,
    level_of_education,
    employment_status,
    duration_of_employment,
    monthly_income,
    gurarantors_relationship,
    facebook,
    twitter,
    instagram,
    loan_repayment,
  } = item;

  const infoDetails = useMemo(
    () => [
      {
        id: 1,
        heading: 'Personal Information',
        data: [
          { label: 'Full Name', value: fullname },
          { label: 'Phone Number', value: phone },
          { label: 'Email Address', value: email },
          { label: 'BVN', value: bvn },
          { label: 'Gender', value: gender },
          { label: 'Marital Status', value: marital_status },
          { label: 'Number of Children', value: children },
          { label: 'Type of Residence', value: type_of_residence },
        ],
      },
      {
        id: 2,
        heading: 'Education and Employment',
        data: [
          { label: 'Level of education', value: level_of_education },
          { label: 'Employment status', value: employment_status },
          { label: 'Sector of employment', value: '' },
          { label: 'Duration of employment', value: duration_of_employment },
          { label: 'Office email', value: email },
          { label: ' Monthly income', value: monthly_income },
          { label: 'loan repayment', value: loan_repayment },
          { label: 'Type of Residence', value: type_of_residence },
        ],
      },
      {
        id: 3,
        heading: 'Socials',
        data: [
          { label: 'Twitter', value: `@${twitter}` },
          { label: 'Facebook', value: `@${facebook}` },
          { label: 'Instagram', value: `@${instagram}` },
        ],
      },
      {
        id: 3,
        heading: 'Guarantors',
        data: [
          { label: 'Full Name', value: gurarantors_fullname },
          { label: 'Phone Number', value: gurarantors_phone_number },
          { label: 'Email Address', value: gurarantors_email_address },
          { label: 'Relationship', value: gurarantors_relationship },
        ],
      },
    ],
    []
  );

  return (
    <Card className={styles.info__container}>
      <section>
        {infoDetails.map(item => {
          return (
            <section key={item.id} className={styles.info__main}>
              <h2>{item.heading}</h2>
              <section className={styles.info__data}>
                {item.data.map(info => (
                  <section className={styles.info__data__item}>
                    <h3>{info.label}</h3>
                    <p>{info.value || '-'}</p>
                  </section>
                ))}
              </section>
            </section>
          );
        })}
      </section>
    </Card>
  );
};

export default Info;
