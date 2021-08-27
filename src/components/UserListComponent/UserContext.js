import { createContext, useState, useEffect } from 'react';
import getApiData from './getApiData';

export const UserContext = createContext();

export default function UserProvider(props) {
  const [users, setUsers] = useState([]);
  const myContextValue = { users: users };
  // console.log(myContextValue);

  useEffect(() => {
    getApiData().then((response) => {
      const newUsers = response.data;
      setUsers(newUsers);
    });
  }, []);

  return (
    <UserContext.Provider value={myContextValue}>
      {props.children}
    </UserContext.Provider>
  );
}

// export const useUserDetails = () => useContext(UserContext);
