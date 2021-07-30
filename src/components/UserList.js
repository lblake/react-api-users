import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../css/userlist.css';

export default function UserList({ data }) {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([...users]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      console.log(response.data);
      const newUsers = response.data;
      setUsers(newUsers);
    });
  }, []);

  const handleChange = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    const newFilter = users.filter((value) => {
      return value.name.toLowerCase().trim().indexOf(searchWord.toLowerCase().trim());
    });

    if (searchWord === ' ') {
      setFilteredUser([]);
    } else {
      setFilteredUser(newFilter);
      console.log('This is the new filter', newFilter);
    }
  };

  return (
    <div>
      <SearchBar
        // valueProp={data}
        handleChange={(event) => handleChange(event)}
        placeholderProp={'Search...'}
      />
      <h1>User Information</h1>
      <div className='userWrapper'>
        {filteredUser.map((user) => {
          return (
            <div className='userItem' key={user.id}>
              <p className='userTitle'>
                Name: {user.name} Email: {user.email}
              </p>
              <div className='userInfo'>
                <span className='textInfo'>
                  Street:
                  <span className='addressInfo'> {user.address.street} </span>
                </span>
                <span className='textInfo'>
                  City:{' '}
                  <span className='addressInfo'>{user.address.city} </span>
                </span>{' '}
                <span className='textInfo'>
                  ZipCode:{' '}
                  <span className='addressInfo'> {user.address.zipcode} </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
