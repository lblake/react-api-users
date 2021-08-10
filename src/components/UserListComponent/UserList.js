import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBarComponent/SearchBar';
import PaginateUsers from '../PaginateUsersComponent/PaginateUsers';
import styles from './userList.module.css';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // changePage function for paginate to know which page has been selected.
  // See: https://www.npmjs.com/package/react-paginate for more information
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const getApiData = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
  };
  // useEffect hook to connect to api
  useEffect(() => {
    getApiData().then((response) => {
      const newUsers = response.data;
      setUsers(newUsers);
      setFilteredUser(newUsers);
    });
  }, []);
  // useEffect hook to update
  useEffect(() => {
    const pagesCount = Math.ceil(filteredUser.length / usersPerPage);
    setPageCount(pagesCount);
  }, [filteredUser]);

  //handleChange function that filters what is typed in the searchbar
  const handleChange = (event) => {
    //Sets the page count back to zero
    setPageNumber(0);
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
    //SearchBar component
    <div>
      <SearchBar
        handleChange={(event) => handleChange(event)}
        placeholderProp={'Search...'}
      />

      {/* Displays user CSS cards */}
      <h1>User Information</h1>
      <div className={styles.userWrapper}>
        {/* Displays a list of filtered users based on what is typed in the search bar */}
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
      {/* PaginateUsers component */}
      <PaginateUsers
        users={filteredUser}
        pageCount={pageCount}
        changePage={changePage}
        pageNumber={pageNumber}
      />
    </div>
  );
}
