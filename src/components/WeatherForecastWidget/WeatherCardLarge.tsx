import React from 'react';
import {consolidatedWeatherObject} from '../../api/types';
import roundingHelper from './roundingHelper';

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
      const today = this.state.consolidated_weather;
      return <div className="col-sm-12">
        <div className="card bg-transparent border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h2>Today</h2>
                <h2>{today?.applicable_date}</h2>
                <img src={`https://www.metaweather.com/static/img/weather/${today?.weather_state_abbr}.svg`}/>
                <h3>{today?.weather_state_name}</h3>
              </div>

              <div className="col-sm-6">
                <div className="WeatherLargeCardDetails">
                  <ul>
                    <li>Min Temp: {roundingHelper(today?.min_temp, 100)}°C</li>
                    <li>Max Temp: {roundingHelper(today?.max_temp, 100)}°C</li>
                    <li>Wind Direction: {today?.wind_direction_compass}</li>
                    <li>Wind Speed: {roundingHelper(today?.wind_speed, 100)}mph</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
    }
}
