import React, { useState } from 'react';
import axios from 'axios';
// import '../css/app.css';
import '../css/userlist.css';

export default function UserList(props) {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      console.log(response.data);
      const newUsers = response.data;
      setUsers(newUsers);
    });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div className='userWrapper'>
        {users.map((user) => {
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
