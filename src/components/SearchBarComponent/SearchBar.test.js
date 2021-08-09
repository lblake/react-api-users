import { act, screen } from '@testing-library/react';
import SearchBar from './SearchBar';


it('should render SearchBar component', async () => {
  await act(async () => {
    expect(<SearchBar />).totoBeTruthy();
  });
});
