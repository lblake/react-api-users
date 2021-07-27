import '../css/searchBar.css';

export default function SearchBar({ value, handleChange }) {
  return (
    <div>
      <input
        className='searchBar'
        type='text'
        placeholder='Search...'
        valueProp={value}
        onChange={handleChange}
      />
    </div>
  );
}
