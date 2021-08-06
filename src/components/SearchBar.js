import styles from '../css/searchBar.module.css';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div>
      <input
        className={styles.searchBar}
        type='search'
        placeholder={placeholderProp}
        onChange={handleChange}
      />
    </div>
  );
}
