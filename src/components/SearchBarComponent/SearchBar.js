import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div data-testid='search-bar'>
      <form>
        <label className={styles.searchLabel} htmlFor='search-bar'>Search</label>

        <input
          type='search'
          className={styles.searchBar}
          placeholder={placeholderProp}
          onChange={handleChange}
          id='search-bar'
        />
      </form>
    </div>
  );
}
