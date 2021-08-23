import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

export default function UserDetails() {
  const {users} = useContext(UserContext);
  const { userId } = useParams();
  console.log(users);
  const filteredUsers = users.filter((user) => {
    console.log(user);
    return user.id === parseInt(userId);
  });
  //filteredUsers = [{name: john  email:email@john}]
  const userInfo = filteredUsers.map((user, index) => {
    return <div key={index}> Name: {user.name} Email: {user.email} </div>;
  });
  return <div>{userInfo}</div>;

  /* Street:
                  <span className='addressInfo'> {user.address.street} </span>
                </span>
                <span className='textInfo'>
                  City:{' '}
                  <span className='addressInfo'>{user.address.city} </span>
                </span>{' '}
                <span className='textInfo'>
                  ZipCode:{' '}
                  <span className='addressInfo'> {user.address.zipcode} </span> */
}
