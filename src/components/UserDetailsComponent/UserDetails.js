import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserListComponent/UserContext';
import { Link } from 'react-router-dom';

import styles from '../UserListComponent/userList.module.css';

export default function UserDetails() {
  const { users } = useContext(UserContext);
  const { userId } = useParams();
  console.log(users);
  const filteredUsers = users.filter((user) => {
    console.log(user);
    return user.id === parseInt(userId);
  });
  //filteredUsers e.g = [{name: john  email:email@john}]
  const userInfo = filteredUsers.map((user, index) => {
    return (
      <div className={styles.userItem} key={index}>
        <p className={styles.userTitle}>
          Name: {user.name} Email: {user.email}
        </p>
        <p className={styles.addressInfo}>Address: {user.address.street}</p>
        <p className={styles.addressInfo}>City: {user.address.city}</p>
        <p className={styles.addressInfo}>Zip Code: {user.address.zipcode}</p>
        <p className={styles.addressInfo}>Phone: {user.phone}</p>
        <p className={styles.addressInfo}>User Name: {user.username}</p>
        <p className={styles.addressInfo}>Website: {user.website}</p>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
      </div>
    );
  });
  return <div>{userInfo}</div>;
}
