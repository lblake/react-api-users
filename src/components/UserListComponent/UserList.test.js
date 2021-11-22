import React from 'react';
// import { createContext, useState, useEffect } from 'react';

// import mockGetApiData from './getApiData.js';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
// import UserContext from './UserList'

// jest.mock('./getApiData.js');

const users = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];


describe('when UserList component renders', () => {
  // beforeEach(() => {
  //   // const users = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];
  //   const resp = { data: users };
  //   mockGetApiData.mockResolvedValue(resp);
  // });

  it('should render UserList component', async () => {
    render(<UserList.Provider value={users} />);
  });
  it('should test if word "User Information is on the page"', async () => {
    render(<UserList.Provider value={users} />);
    expect(screen.getByText(/User Information/i)).toBeInTheDocument();
  });

  it('should test if word "User Information" is not on the page', async () => {
    expect(screen.queryByText('What ever')).not.toBeInTheDocument();
  });
});
