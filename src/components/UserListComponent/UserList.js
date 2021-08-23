import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBarComponent/SearchBar';
import PaginateUsers from '../PaginateUsersComponent/PaginateUsers';
import styles from './userList.module.css';
import getApiData from './getApiData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [usersPerPage, setUsersPerPage] = useState(10);
  const pagesVisited = pageNumber * usersPerPage;

  // changePage function for paginate to know which page has been selected.
  // See: https://www.npmjs.com/package/react-paginate for more information
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // sets the number of users displayed per page
  const handleUsersPerPage = (event) => {
    const users = event.target.value;
    setUsersPerPage(users);
  };

  // const getApiData = () => {
  //   return axios.get(`https://jsonplaceholder.typicode.com/users`);
  // };
  // useEffect hook to connect to api
  useEffect(() => {
    getApiData().then((response) => {
      const newUsers = response.data;
      setUsers(newUsers);
      setFilteredUser(newUsers);
      // return response.data.users;
      console.log(newUsers);
    });
  }, []);
  // useEffect hook to update
  useEffect(() => {
    const pagesCount = Math.ceil(filteredUser.length / usersPerPage);
    setPageCount(pagesCount);
  }, [filteredUser, usersPerPage]);

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

      <div>
        <form>
          <label>
            Select the number of users per page
            <select
              className={styles.userSelect}
              value={usersPerPage}
              onChange={handleUsersPerPage}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </label>
        </form>
      </div>

      {/* Displays user CSS cards */}
      <h1>User Information</h1>
      <div className={styles.userWrapper}>
        {/* Displays a list of filtered users based on what is typed in the search bar */}
        {filteredUser
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user, index) => {
            return (
              <div className={styles.userItem} key={index}>
                <p className={styles.userTitle}>
                  Name: {user.name} Email: {user.email}
                </p>
                <div className={styles.userInfo}>
                  <span className={styles.userInfo}></span>
                </div>
                <Link to={`/user/${user.id}`}>More Info</Link>
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
