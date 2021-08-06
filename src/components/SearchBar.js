import styles from '../css/searchBar.module.css';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div>
      <input
        type='search'
        className={styles.searchBar}
        placeholder={placeholderProp}
        onChange={handleChange}
      />
    </div>
  );
}
