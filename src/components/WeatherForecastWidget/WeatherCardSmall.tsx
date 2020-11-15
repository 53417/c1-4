import React from 'react';
import { consolidatedWeatherObject } from '../../api/types';
import roundingHelper from './roundingHelper';

type weatherCardSmallState = {
    consolidated_weather: consolidatedWeatherObject | null,
}

export default class WeatherCardSmall extends React.Component<any> {

    state: weatherCardSmallState = {
      consolidated_weather: null
    }
    componentDidMount() {
      this.setState({
        consolidated_weather: this.props.weatherData
      });
    }
    
    render() {
      const day = this.state.consolidated_weather;
      return <div className="col-sm-4">
        <div className="card bg-transparent border-0">
          <div className="card-body">
            <h2>{day?.applicable_date}</h2>
            <img src={`https://www.metaweather.com/static/img/weather/${day?.weather_state_abbr}.svg`}/>
            <h3>{day?.weather_state_name}</h3>
            <ul>
              <li>Min Temp: {roundingHelper(day?.min_temp, 100)}°C</li>
              <li>Max Temp: {roundingHelper(day?.max_temp, 100)}°C</li>
              <li>Wind Direction: {day?.wind_direction_compass}</li>
              <li>Wind Speed: {roundingHelper(day?.wind_speed, 100)}mph</li>
            </ul>
          </div>
        </div>
      </div>;
    }
}
