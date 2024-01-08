import Button, { OutlineButton } from '@components/elements/button';
import Card from '@components/elements/card';
import TextField from '@components/elements/textfield';
import styles from './filter.module.scss';
import SelectDropdown from '@components/elements/select';
import { FilterTypes } from '@/types/dataTable';
import { useUsersData } from '@hooks/useData';
import { useMemo } from 'react';

interface FilterProps {
  filters: FilterTypes;
}

const Filter: React.FC<FilterProps> = ({ filters }) => {
  const users = useUsersData();
  const organisations = useMemo(
    () =>
      users.generatedData.map(item => ({
        label: item.organisation,
        value: item.organisation,
      })),
    [users.generatedData]
  );

  const status = [
    {
      label: 'Active',
      value: 'active',
    },
    {
      label: 'Inactive',
      value: 'inactive',
    },
    {
      label: 'blacklisted',
      value: 'blacklisted',
    },
    {
      label: 'Pending',
      value: 'pending',
    },
  ];
  return (
    <Card>
      <section className={styles.filter__container}>
        <form>
          <div className={styles.form__container}>
            <div className={styles.form__container}>
              <SelectDropdown
                label={'Organisation'}
                options={organisations}
                onChange={({ value }: { value: string }) => {
                  filters.setFilter({ field: 'organisation', value });
                }}
              />
            </div>
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Username"
              value={filters.username}
              onChange={e =>
                filters.setFilter({ field: 'username', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Email"
              value={filters.email}
              onChange={e =>
                filters.setFilter({ field: 'email', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Date"
              type="date"
              value={filters.date}
              onChange={e =>
                filters.setFilter({ field: 'date', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Phone Number"
              value={filters.phone_number}
              onChange={e =>
                filters.setFilter({
                  field: 'phone_number',
                  value: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.form__container}>
            <SelectDropdown
              options={status}
              label={'Status'}
              onChange={({ value }: { value: string }) => {
                filters.setFilter({ field: 'status', value });
              }}
            />
          </div>
          <div className={styles.filter__cta}>
            <div>
              <OutlineButton label="Cancel" />
            </div>
            <div>
              <Button label="Filter" />
            </div>
          </div>
        </form>
      </section>
    </Card>
  );
};

export default Filter;
