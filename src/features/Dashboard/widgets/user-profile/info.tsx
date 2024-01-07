import styles from './user-profile.module.scss';
import Card from '@components/elements/card';

const Info = () => {
  const infoDetails = [
    {
      id: 1,
      heading: 'Personal Information',
      data: [
        { label: 'Full Name', value: '' },
        { label: 'Phone Number', value: '' },
        { label: 'Email Address', value: '' },
        { label: 'BVN', value: '' },
        { label: 'Gender', value: '' },
        { label: 'Marital Status', value: '' },
        { label: 'Children', value: '' },
        { label: 'Type of Residence', value: '' },
      ],
    },

    {
      id: 2,
      heading: 'Education and Employment',
      data: [
        { label: 'Level of education', value: '' },
        { label: 'Employment status', value: '' },
        { label: 'Sector of employment', value: '' },
        { label: 'Duration of employment', value: '' },
        { label: 'Office email', value: '' },
        { label: ' Monthly income', value: '' },
        { label: 'loan repayment', value: '' },
        { label: 'Type of Residence', value: '' },
      ],
    },
    {
      id: 3,
      heading: 'Socials',
      data: [
        { label: 'Twitter', value: '' },
        { label: 'Facebook', value: '' },
        { label: 'Instagram', value: '' },
      ],
    },
    {
      id: 3,
      heading: 'Guarantors',
      data: [
        { label: 'Full Name', value: '' },
        { label: 'Phone Number', value: '' },
        { label: 'Email Address', value: '' },
        { label: 'Relationship', value: '' },
      ],
    },
  ];
  return (
    <Card>
      <section className={styles.info__container}>
        {infoDetails.map(item => {
          return (
            <section key={item.id}>
              <h2>{item.heading}</h2>
              <section>
                {item.data.map(info => (
                  <section>
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
