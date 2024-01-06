import Button from '@components/elements/button';
import Card from '@components/elements/card';
import TextField from '@components/elements/textfield';
import styles from './filter.module.scss';
import SelectDropdown from '@components/elements/select';

const Filter = () => {
  return (
    <Card>
      <section className={styles.filter__container}>
        <form>
          <div className={styles.form__container}>
            <div className={styles.form__container}>
              <SelectDropdown options={[]} label={'Organisation'} />
            </div>
          </div>
          <div className={styles.form__container}>
            <TextField label="Username" />
          </div>
          <div className={styles.form__container}>
            <TextField label="Email" />
          </div>
          <div className={styles.form__container}>
            <TextField label="Date" type="date" />
          </div>
          <div className={styles.form__container}>
            <TextField label="Phone Number" />
          </div>
          <div className={styles.form__container}>
            <SelectDropdown options={[]} label={'Status'} />
          </div>
          <div className={styles.filter__cta}>
            <div>
              <Button />
            </div>
            <div>
              <Button />
            </div>
          </div>
        </form>
      </section>
    </Card>
  );
};

export default Filter;
