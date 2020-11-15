import React from 'react';
import { consolidatedWeatherObject } from '../../api/types';
import roundingHelpers from './roundingHelpers';

type weatherCardLargeState = {
  consolidated_weather: consolidatedWeatherObject | null,
}

export default class WeatherCardLarge extends React.Component<any> {

    state: weatherCardLargeState = {
      consolidated_weather: null
    }

    componentDidMount() {
      this.setState({
        consolidated_weather: this.props.weatherData
      });

    }

    render() {
      const day = this.state.consolidated_weather;
      return <div className="col-sm-12">
        <div className="card bg-transparent border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h2>Today</h2>
                <h2>{day?.applicable_date}</h2>
                <img src={`https://www.metaweather.com/static/img/weather/${day?.weather_state_abbr}.svg`}/>
                <h3>{day?.weather_state_name}</h3>
              </div>

              <div className="col-sm-6">
                <div className="WeatherLargeCardDetails">
                  <ul>
                    <li>Min <i className="fas fa-temperature-low"/> {roundingHelpers(day?.min_temp, 100)}°C</li>
                    <li>Max <i className="fas fa-temperature-high"/> {roundingHelpers(day?.max_temp, 100)}°C</li>
                    <li><i className="fas fa-wind"/> Direction: {day?.wind_direction_compass}</li>
                    <li><i className="fas fa-wind"/> Speed: {roundingHelpers(day?.wind_speed, 100)}mph</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
    }
}
