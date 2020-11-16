import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCardSmall from '../../../weatherForecastWidget/components/weatherCardSmall/WeatherCardSmall';
import weatherSearchResponse from '../../fixtures/metaWeather/weatherSearchResponse.json';

test('renders weatherCardSmall', () => {
  const day = weatherSearchResponse.consolidated_weather[0];
  render(<WeatherCardSmall weatherData={day}/>);
  const weatherCardSmall = screen.getByLabelText(day.applicable_date);
  const cardDate = screen.getByText(day.applicable_date);
  const cardWeatherDescription = screen.getByText(day.weather_state_name);

  expect(weatherCardSmall).toBeInTheDocument();
  expect(cardDate).toBeInTheDocument();
  expect(cardWeatherDescription).toBeInTheDocument();
});
