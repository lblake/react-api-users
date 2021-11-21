import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import UserList from './UserList';
import { UserContext } from './UserContext';

describe('when UserList component renders', () => {
  it('should render UserList component', async () => {
    render(
      <UserContext>
        <UserList />
      </UserContext>
    );
  });
  it('should test if word "User Information is on the page"', async () => {
    render(<UserList />);
    expect(screen.getByText(/User Information/i)).toBeInTheDocument();
  });

  it('should test if word "User Information" is not on the page', async () => {
    expect(screen.queryByText('What ever')).not.toBeInTheDocument();
  });
});
