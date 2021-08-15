import mockGetApiData from './getApiData.js';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import SearchBar from '../SearchBarComponent/SearchBar';

jest.mock('./getApiData.js');

describe('when testing the UserList component', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    const users = [{ name: 'Mocked  User', email: 'mocked@mocked.com' }];
    const resp = { data: users };
    mockGetApiData.mockResolvedValue(resp);
    render(<UserList />);
  });

  it('should mock fetching users', async () => {
    // await waitFor(() => mockGetApiData());
    // screen.debug();
    expect(screen.getByText(/User Information/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked User/)).toBeInTheDocument();
    expect(mockGetApiData).toHaveBeenCalledTimes(1);
  });

  it('should mock a user typed in search bar', async () => {
    const handleChange = jest.fn((value) => {});
    const searchInput = screen.getByRole('searchbox', {
      name: '',
    });
    // render(<UserList handleChange={handleChange} />);

    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'Mocked Input User' } });
    handleChange.mockReturnValueOnce(searchInput.value);
    expect(searchInput.value).toBe('Mocked Input User');

    await waitFor(() => mockGetApiData());
    screen.debug();
    console.log(searchInput.value, handleChange());
    // expect(await screen.findByText(/Mocked Input User/)).toBeInTheDocument();
    // expect(screen.getByRole('searchbox')).toHaveValue('Mocked Input User');
    //   expect(await screen.findByText(/Mocked User/)).toBeInTheDocument();

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
