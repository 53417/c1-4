import React from 'react';
import { consolidatedWeatherObject } from '../../api/types';

type weatherCardSmallState = {
    consolidated_weather: consolidatedWeatherObject | null,
}

export default class WeatherCardSmall extends React.Component<any> {

    state: weatherCardSmallState = {
      consolidated_weather: null
    }

    async componentDidMount() {
      this.setState({
        consolidated_weather: this.props.weatherData
      });

    }

    render() {
      const day = this.state.consolidated_weather;
      return <div className="card col-sm-4">
        <div className="card-body">
          <img src={`https://www.metaweather.com/static/img/weather/${day?.weather_state_abbr}.svg`}></img>
          <p>{day?.weather_state_name}</p>
          <p>{day?.the_temp}</p>
          <p>Min: {day?.min_temp}</p>
          <p>Max: {day?.max_temp}</p>
          <p>Wind Direction: {day?.wind_direction_compass}</p>
          <p>Wind speed: {day?.wind_speed}</p>
        </div>
      </div>;
    }
}
