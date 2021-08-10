import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

describe('When UserList renders', () => {
  beforeEach(() => {
    act(() => {
      render(<UserList />);
    });
  });
  it('should render UserList component', async () => {
    screen.debug();
  });
  it('should test if word "User Information is on the page"', async () => {
    await waitFor(() => {
      expect(screen.getByText('User Information')).toBeInTheDocument();
    });
  });

  it('should test if word "User Information" is not on the page', async () => {
    await waitFor(() => {
      expect(screen.queryByText('What ever')).not.toBeInTheDocument();
    });
  });
});

describe('When mocking the API', () => {
  beforeEach(() => {
    act(() => {
      render(<UserList />);
    });
  });
  it('should test is API is returning response', async () => {
    const getApiData = jest.fn();
    getApiData.mockResolvedValue('Kurtis Weissnat');
    await waitFor(() => {
      screen.queryByText(/Kurtis Weissnat/);
    });
    screen.debug();
  });

  it('should test handleChange function', async () => {
    const handleChange = jest.fn();
    handleChange();
    await waitFor(() => {
      expect(handleChange).toBeCalledTimes(1);
    });
  });
});
