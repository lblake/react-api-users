import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('When rendering App Component', () => {
  it('should render App component without errors', () => {
    act(() => {
      render(<App />);
    });
    screen.debug();
  });
});
