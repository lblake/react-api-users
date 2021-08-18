import mockGetApiData from './getApiData.js';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from './UserList';

jest.mock('./getApiData.js');

describe('when testing the UserList component', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    const users = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];
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
    const searchInput = screen.getByLabelText('Search');

    expect(searchInput).toBeInTheDocument();

    // fireEvent.change(searchInput, { target: { value: 'Mocked Input User' } });
    // userEvent.type(screen.getByLabelText(/search/i), 'ocked Input User')

    userEvent.type(searchInput, 'Mocked User');
    await waitFor(() => {
      expect(searchInput).toHaveValue('Mocked User');
    });

    // screen.getByLabelText('search-bar');
    // expect(await screen.findByText('Mocked User')).toBeInTheDocument();
    // mockGetApiData()
    screen.debug();
    // console.log(searchInput)
    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
