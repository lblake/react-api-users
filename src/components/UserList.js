import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PaginateUsers from './PaginateUsers';
import '../css/userlist.css';

export default function UserList(props) {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  // const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      console.log(response.data);
      const newUsers = response.data;
      setUsers(newUsers);
      setFilteredUser(newUsers);
    });
  }, []);

  useEffect(() => {
    const pageCount = Math.ceil(users.length / usersPerPage);
    setPageCount(pageCount);
    console.log(pageCount);
  }, [users.length]);

  const handleChange = (event) => {
    const searchWord = event.target.value;
    const newFilter = users.filter((value) => {
      return (
        value.name
          .toLowerCase()
          .trim()
          .indexOf(searchWord.toLowerCase().trim()) > -1
      );
    });

    if (searchWord === ' ') {
      setFilteredUser(users);
    } else {
      setFilteredUser(newFilter);
    }
  };

  return (
    <div>
      <SearchBar
        handleChange={(event) => handleChange(event)}
        placeholderProp={'Search...'}
      />
      <h1>User Information</h1>
      <div className='userWrapper'>
        {filteredUser
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user) => {
            return (
              <div className='userItem' key={user.id}>
                <p className='userTitle'>
                  Name: {user.name} Email: {user.email}
                </p>
                <div className='userInfo'>
                  <span className='textInfo'>
                    {/* Street:
                  <span className='addressInfo'> {user.address.street} </span>
                </span>
                <span className='textInfo'>
                  City:{' '}
                  <span className='addressInfo'>{user.address.city} </span>
                </span>{' '}
                <span className='textInfo'>
                  ZipCode:{' '}
                  <span className='addressInfo'> {user.address.zipcode} </span> */}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <PaginateUsers
        users={filteredUser}
        pageCount={pageCount}
        pagesVisited={pagesVisited}
        changePage={changePage}
      />
    </div>
  );
}
