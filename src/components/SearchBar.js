import '../css/searchBar.css';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div>
      <input
        className='searchBar'
        type='search'
        placeholder={placeholderProp}
        // valueProp={data}
        onChange={handleChange}
      />
    </div>
  );
}
