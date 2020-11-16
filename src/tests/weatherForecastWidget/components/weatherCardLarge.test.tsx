import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCardLarge from '../../../weatherForecastWidget/components/weatherCardLarge/WeatherCardLarge';
import weatherSearchResponse from '../../fixtures/metaWeather/weatherSearchResponse.json';

test('renders WeatherCardLarge', () => {
  const day = weatherSearchResponse.consolidated_weather[0];
  render(<WeatherCardLarge weatherData={day}/>);
  const weatherCardLarge = screen.getByLabelText(day.applicable_date);
  const cardDate = screen.getByText(day.applicable_date);
  const cardWeatherDescription = screen.getByText(day.weather_state_name);
  
  expect(weatherCardLarge).toBeInTheDocument();
  expect(cardDate).toBeInTheDocument();
  expect(cardWeatherDescription).toBeInTheDocument();
});
