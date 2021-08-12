import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('when rendering App component', () => {
  it('should render App component without errors', async () => {
    render(<App />);

    // screen.debug();
  });
});
