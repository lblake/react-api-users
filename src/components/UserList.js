import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PaginateUsers from './PaginateUsers';
import styles from '../css/userList.module.css';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const usersPerPage = 4;
  const [pagesVisited, setPagesVisited] = useState(pageNumber * usersPerPage);

  // const pagesVisited = pageNumber * usersPerPage;
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
    const pagesCount = Math.ceil(filteredUser.length / usersPerPage);
    setPageCount(pagesCount);
    console.log('useEffect filtered user', filteredUser.length);
  }, [filteredUser]);

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
      setPagesVisited(0);
    }
  };
  console.log(filteredUser);
  console.log(pageCount);
  console.log(pagesVisited);
  console.log(filteredUser.slice(pagesVisited, pagesVisited + usersPerPage));
  return (
    <div>
      <SearchBar
        handleChange={(event) => handleChange(event)}
        placeholderProp={'Search...'}
      />
      <h1>User Information</h1>
      <div className={styles.userWrapper}>
        {filteredUser
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user) => {
            return (
              <div className={styles.userItem} key={user.id}>
                <p className={styles.userTitle}>
                  Name: {user.name} Email: {user.email}
                </p>
                <div className={styles.userInfo}>
                  <span className={styles.userInfo}>
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
