import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

window.alert = jest.fn();

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/MetaWeather/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders searchbar', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText('Search');
  expect(searchElement).toBeTruthy();
});
