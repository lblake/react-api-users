import React, { useState } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';

function App() {
  const [word, setWord] = useState('');

  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (event) => {
    setWord(event);
    /*{ issue with map function should be user or users}*/
    const oldList = word.map((user) => {
      return {
        name: user.name.toLowerCase(),
      };
    });

    if (word !== '') {
      let newList = [];
      newList = oldList.filter((user) =>
        user.name.includes(word.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      /*{Not sure what I need to enter in here}*/
      setFilterDisplay();
    }
  };

  return (
    <div>
      <SearchBar
        valueProp={word}
        handleChange={(event) => handleChange(event.target.value)}
      />
      {/* I know this is wrong but not sure why  'word' is not the correct value*/}
      <UserList userProp={word.length < 1 ? word : filterDisplay} />
    </div>
  );
}
export default App;
