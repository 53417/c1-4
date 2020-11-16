import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../../../weatherForecastWidget/components/searchBar/SearchBar';

test('renders searchbar', () => {
  render(<SearchBar />);
  const searchInput = screen.getByLabelText(/search location/i);
  expect(searchInput).toBeInTheDocument();
  const geolocationButton = screen.getByLabelText(/weather by geolocation/i);
  expect(geolocationButton).toBeInTheDocument();
});
