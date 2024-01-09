import React from 'react';
import Card from '@components/elements/card';
import TextField from '@components/elements/textfield';
import styles from './filter.module.scss';
import SelectDropdown from '@components/elements/select';
import { FilterQuery, FilterTypes } from '@/types/dataTable';
import { useUsersData } from '@hooks/useData';
import { useMemo } from 'react';
import { Button } from '@components/elements/button-c';
import OutlineButton from '@components/elements/outline-button';

interface FilterProps {
  filters: FilterTypes;
  query: FilterQuery;
}

const Filter: React.FC<FilterProps> = ({ filters, query }) => {
  const users = useUsersData();
  const organisations = useMemo(
    () =>
      users.generatedData.map(item => ({
        label: item.organisation,
        value: item.organisation,
      })),
    []
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
    <Card
      className={`${styles.filter__container} ${
        filters.filtersModal ? styles.visible : styles.hidden
      }`}
    >
      <section>
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
              value={filters.filters.username}
              onChange={e =>
                filters.setFilter({ field: 'username', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Email"
              value={filters.filters?.email}
              onChange={e =>
                filters.setFilter({ field: 'email', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Date"
              type="date"
              value={filters.filters.date}
              onChange={e =>
                filters.setFilter({ field: 'date', value: e.target.value })
              }
            />
          </div>
          <div className={styles.form__container}>
            <TextField
              label="Phone Number"
              value={filters.filters.phone_number}
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
              <OutlineButton
                label="Cancel"
                onClick={() => filters.setFilterModal(false)}
              />
            </div>
            <div>
              <Button
                label="Filter"
                onClick={() => {
                  filters.setQuery(q => ({ ...q, ...query }));
                  filters.setFilterModal(false);
                }}
              />
            </div>
          </div>
        </form>
      </section>
    </Card>
  );
};

export default Filter;
