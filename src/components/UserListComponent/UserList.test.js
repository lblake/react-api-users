import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import UserList from './UserList';
import SearchBar from '../SearchBarComponent/SearchBar';

describe('when UserList component renders', () => {
  // beforeEach(() => {
  //   render(<UserList />);
  // });
  it('should render UserList component', async () => {
    render(<UserList />);
    // screen.debug();
  });
  it('should test if word "User Information is on the page"', async () => {
    render(<UserList />);
    expect(screen.getByText('User Information')).toBeInTheDocument();
  });

  it('should test if word "User Information" is not on the page', async () => {
    render(<UserList />);
    expect(screen.queryByText('What ever')).not.toBeInTheDocument();
  });
});

describe('when mocking the API', () => {
  // beforeEach(() => {
  //   render(<UserList />);
  // });
  it('should test is API is returning response with a list of users', async () => {
    render(<UserList />);
    const getApiData = jest.fn();
    getApiData.mockResolvedValue({ name: /Kurtis Weissnat/i });
    await screen.findByText(/Kurtis Weissnat/);
    // screen.debug();
  });

  it('should test handleChange function', async () => {
    const handleChange = jest.fn();
    handleChange();
    expect(handleChange).toBeCalledTimes(1);
  });
  it('should type user name in input field', async () => {
    render(<UserList />);
    render(<input />);
    const element = screen.getByRole('searchbox');
    expect(element).toBeInTheDocument();
    userEvent.type(screen.getByRole('searchbox'), 'Ervin');
    expect(screen.getByRole('searchbox')).toHaveValue('Ervin');
    // screen.queryByText(/Ervin/);
    // screen.debug()
  });
});

describe('when entering a user in searchbar', () => {
  const renderComponent = (searchInputValue, handleSearchInputValue) => {
    render(
      <UserList value={searchInputValue} onChange={handleSearchInputValue} />
    );
  };
  it('should display the user of the page', async () => {
    const mockHandleSearchInputValue = jest.fn();
    renderComponent('Ervin', mockHandleSearchInputValue);
    // const inputNode = getByTestId('search-bar'); // your  input label
    // expect(inputNode.value).toBe('s'); // to test input value
    const inputNode = screen.getByRole('searchbox');
    userEvent.type(inputNode, { target: { value: 'Ervin' } }); // triggers onChange event
    expect(mockHandleSearchInputValue).toBeCalledTimes(1); // tests if onChange handler is called with proper value
  });
});
