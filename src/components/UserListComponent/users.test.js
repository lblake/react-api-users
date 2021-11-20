import mockGetApiData from './getApiData.js';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import {UserList} from './UserList';
import UserList from './UserList'

jest.mock('./getApiData.js');

describe('when testing the UserList component', () => {
  beforeEach(() => {
    const users = [{ name: 'Mocked User', email: 'mocked@mocked.com' }];
    const resp = { data: users };
    mockGetApiData.mockResolvedValue(resp);
    render(<UserList/>);
  });

  it('should mock fetching users', async () => {
    expect(screen.getByText(/User Information/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked User/i)).toBeInTheDocument();
    expect(mockGetApiData).toHaveBeenCalledTimes(1);
  });

  it('should mock a user typed in search bar', async () => {
    const searchInput = screen.getByLabelText('Search');

    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, 'Mocked User');
    await waitFor(() => {
      expect(searchInput).toHaveValue('Mocked User');
    });

    expect(await screen.findByText(/Mocked User/i)).toBeInTheDocument();
    expect(mockGetApiData).toHaveBeenCalledTimes(1);
  });
});
