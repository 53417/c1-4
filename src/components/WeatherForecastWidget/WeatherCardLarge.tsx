import React from 'react';
import {metaWeatherLocationResponse} from "../../api/types";

type weatherCardLargeState = {
    weatherData: metaWeatherLocationResponse | null,
}

export default class WeatherCardLarge extends React.Component<any> {

    state: weatherCardLargeState = {
        weatherData: null
    }

    async componentDidMount() {
        this.setState({
            weatherData: this.props.weatherData
        })

    }

    render() {
        const today = this.state.weatherData?.consolidated_weather[0]
        return <div className="row">
            <div className="card col-sm-12">
                <div className="card-body">
                    <div className="row">
                        <h2 className="card-title">{this.state.weatherData?.title}</h2>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <img src={`https://www.metaweather.com/static/img/weather/${today?.weather_state_abbr}.svg`}></img>
                            <p>{today?.weather_state_name}</p>
                            <p>{today?.the_temp}</p>
                        </div>

                        <div className="col-sm-8">
                            <p>Min: {today?.min_temp}</p>
                            <p>Max: {today?.max_temp}</p>
                            <p>Wind Direction: {today?.wind_direction_compass}</p>
                            <p>Wind speed: {today?.wind_speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
