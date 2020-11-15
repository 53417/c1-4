import React from 'react';
import './styles.css'
import SearchBar from './SearchBar'
import WeatherCardLarge from './WeatherCardLarge'
import metaWeather from "../../api/metaWeather";
import {metaWeatherLocationResponse, consolidatedWeatherObject} from "../../api/types"
import WeatherCardSmall from "./WeatherCardSmall";

type WeatherForecastWidgetState = {
    weatherData: metaWeatherLocationResponse | null,
}

export default class WeatherForecastWidget extends React.Component<any> {

    state: WeatherForecastWidgetState = {
        weatherData: null
    }

    async componentDidMount() {
        const weatherData = await metaWeather.getWeatherData('1105779')
        this.setState({weatherData})
    }

    // re-render child components on state change
    componentDidUpdate(prevProps: metaWeatherLocationResponse) {
        if(prevProps.title !== this.props.title) {
            this.setState({title: this.props.title});
        }
    }

    // lets child components update parent component
    updateWidgetState = (data: {}) => {
        this.setState(data)
    }

    render() {
        return <div className="WeatherForecastWidget">
            <div className="container">
                <div className="row">
                    <h1>Weather</h1>
                </div>

                <SearchBar updateWidgetState={this.updateWidgetState}></SearchBar>

                <WeatherCardLarge weatherData={this.state.weatherData}></WeatherCardLarge>

                <div className="row">
                    {/*parse the 2nd to 4th value of consolidated_weather array to display next 3 days of weather*/}
                    {this.state.weatherData?.consolidated_weather.slice(1,4).map((day: consolidatedWeatherObject) => {
                        return <WeatherCardSmall weatherData={day}></WeatherCardSmall>
                    })}
                </div>
            </div>
        </div>
    }
}