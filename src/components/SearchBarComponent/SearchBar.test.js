import { render, act } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('When SearchBar component renders', () => {
  it('should render SearchBar component', async () => {
    act(() => {
      render(<SearchBar />);
    });
  });
});
