import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from '.';

configure({ adapter: new Adapter() });

describe('UserList Tests', () => {
  it('should render UserList component', async () => {
    await act(async () => {
      expect(<UserList />).toBeTruthy();
    });
  });

  it('should test if word "User Information is on the page"', async () => {
    await act(async () => {
      render(<UserList />);
    });

    const headlingElement = screen.getByText(/User Information/i);
    expect(headlingElement).toBeInTheDocument();
  });
});

describe('handle change function', () => {
  it('should test handleChange function', async () => {
    const mockedHandleChange = jest.fn();
    const wrapper = shallow(<UserList onChange={jest.fn()} />);
    wrapper.instance.handleChange = mockedHandleChange;
    expect(mockedHandleChange).toHaveBeenCalledTimes(1);
  });
});
