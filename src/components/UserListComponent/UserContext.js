import { createContext, useState, useEffect } from 'react';
import getApiData from './getApiData';

export const UserContext = createContext();

export default function UserProvider(props) {
  const [users, setUsers] = useState([]);
  const myContextValue = { users: users };

  useEffect(() => {
    getApiData().then((response) => {
      const newUsers = response.data;
      setUsers(newUsers);
      //   setFilteredUser(newUsers);
    });
  }, []);

  return (
    <UserContext.Provider value={myContextValue}>
      {props.children}
    </UserContext.Provider>
  );
}
