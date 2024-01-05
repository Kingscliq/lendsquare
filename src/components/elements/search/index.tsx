import React from 'react';
import TextField from '../textfield';
import { searchIcon } from '@assets/icons';
import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={styles.search__container}>
      <TextField placeholder="Search for an Item" inputClass={styles.input} />
      <div className={styles.search__icon__container}>
        <img src={searchIcon} alt="Lendsqr Search Icon" />
      </div>
    </div>
  );
};

export default Search;
