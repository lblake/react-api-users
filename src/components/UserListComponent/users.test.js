import mockGetApiData from './getApiData.js';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import UserList from './UserList';

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
    const searchInput = screen.getByRole('searchbox', {
      name: '',
    });
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Mocked User' } });
    await waitFor(() => {
      expect(searchInput).toHaveValue('Mocked User');
    });

    expect(await screen.findByText(/Mocked User/)).toBeInTheDocument();

    screen.debug();

    expect(screen.getByRole('searchbox')).toHaveValue('Mocked User');
    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
