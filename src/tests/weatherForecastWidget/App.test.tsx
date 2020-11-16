import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherForecastWidget from './../../weatherForecastWidget/app/App';

window.alert = jest.fn();

test('renders title', () => {
  render(<WeatherForecastWidget />);
  const linkElement = screen.getByText(/MetaWeather/i);
  expect(linkElement).toBeInTheDocument();
  const searchElement = screen.getByPlaceholderText('Search');
  expect(searchElement).toBeInTheDocument();
});
