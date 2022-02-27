import React from 'react'
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('when SearchBar component renders', () => {
  it('should render SearchBar component without errors', ()=> {
    render(<SearchBar />);
  });
});
