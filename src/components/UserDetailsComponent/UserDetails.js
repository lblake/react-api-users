import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserListComponent/UserContext';
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
        Address: {user.address.street}
        <span></span>
        City: {user.address.city} <span></span>
        Zip Code: {user.address.zipcode} <span></span>
        Phone: {user.phone} <span></span>
        User Name: {user.username} <span></span>
        Website: {user.website}
        <span></span>
      </div>
    );
  });
  return <div>{userInfo}</div>;
}
