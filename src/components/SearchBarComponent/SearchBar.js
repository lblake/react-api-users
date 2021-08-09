import styles from './searchBar.module.css';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div data-testid="search-bar">
      <input
        type='search'
        className={styles.searchBar}
        placeholder={placeholderProp}
        onChange={handleChange}
      />
    </div>
  );
}



