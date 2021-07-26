import React, { useState } from 'react';
import '../css/searchBar.css'

export default function SearchBar(props) {
  console.log(props);
  const [searchTerm, setSearchTerm] = useState([]);
  return (
    <div>
      <input
      className="searchBar"
        type='text'
        placeholder='Search...'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
}
