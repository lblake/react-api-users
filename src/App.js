import React from 'react';
// import { createContext } from 'react';
import UserList from './components/UserListComponent/UserList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDetails from './components/UserDetailsComponent/UserDetails';
import UserProvider from './components/UserListComponent/UserContext';

function App() {
  return (
    <Router>
      <div>
        <UserProvider>
          <Route exact path='/'>
            <UserList />
          </Route>
          <Route exact path='/user/:userId'>
            <UserDetails />
          </Route>
        </UserProvider>
      </div>
    </Router>
  );
}
export default App;
