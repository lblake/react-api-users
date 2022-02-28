import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { UserContext } from './UserContext';

describe('when UserList component renders', () => {
  it('should render UserList component', () => {
    const mockedUsers = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];

    render(
      <UserContext.Provider value={{ users: mockedUsers }}>
        <UserList />
      </UserContext.Provider>
    );
  });
  it('should test if word "User Information is on the page"', () => {
    // const users = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];
    // render(<UserList.Provider value={users} />);
    // expect(screen.getByText(/User/i)).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.startsWith('User'))

  });

  // it('should test if word "User Information" is not on the page', () => {
  //   expect(screen.queryByText('What ever')).not.toBeInTheDocument();
  // });
});
