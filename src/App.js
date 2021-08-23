import React from 'react';
import { createContext } from 'react';
import UserList from './components/UserListComponent/UserList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDetails from './components/UserDetailsComponent/UserDetails';

const { Provider } = createContext();
export const UserContext = createContext([
  { id: 1, name: 'Lloyd', email: 'test@test.com' },
]);
function App() {
  return (
    <Router>
      <div>
        <Route exact path='/'>
          <Provider value={[]}>
            <UserList />
          </Provider>
        </Route>
        <Route exact path='/user/:userId'>
          <UserDetails />
        </Route>
      </div>
    </Router>
  );
}
export default App;
