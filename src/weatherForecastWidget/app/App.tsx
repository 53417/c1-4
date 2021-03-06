import React from 'react';
import './styles.css';
import SearchBar from '../components/searchBar/SearchBar';
import WeatherCardLarge from '../components/weatherCardLarge/WeatherCardLarge';
import metaWeather from '../../api/metaWeather/metaWeather';
import { metaWeatherLocationResponse, consolidatedWeatherObject } from '../../api/metaWeather/types';
import WeatherCardSmall from '../components/weatherCardSmall/WeatherCardSmall';
import loadingSvg from '../assets/loading.svg';

type WeatherForecastWidgetState = {
  weatherData: metaWeatherLocationResponse | null,
  loading: boolean
}

export default class WeatherForecastWidget extends React.Component<any> {
  state: WeatherForecastWidgetState = {
    weatherData: null,
    loading: true
  }

  async componentDidMount() {
    this.handleGeolocation();
  }

  // re-render child components on state change
  componentDidUpdate(prevProps: metaWeatherLocationResponse) {
    if(prevProps.title !== this.props.title) {
      this.setState({ title: this.props.title });
    }
  }

  // lets child components update parent component
  updateWidgetState = (data: {}) => {
    this.setState(data);
  }
  
  // handles geolocation from browser search
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  handleGeolocation = () => {
    if (navigator.geolocation) {
      this.updateWidgetState({
        loading: true
      });
      let geolocation: {latitude?: number, longitude?: number} = {};
      navigator.geolocation.getCurrentPosition(async (position: any) => {
        const geolocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        if(geolocation.latitude && geolocation.longitude) {
          try {
            const location = await metaWeather.getLocationData(geolocation);
            const weatherData = await metaWeather.getWeatherData(location[0].woeid);
            this.updateWidgetState({
              weatherData,
              loading: false
            });
          } catch(err) {
            this.updateWidgetState({
              loading: false
            });
            return err;
          }
        }
      });
    } else {
      this.updateWidgetState({
        loading: false
      });
      alert('Geolocation is not supported by this browser.');
    }
  }

  render() {
    return <div className="WeatherForecastWidget">
      <div className="container">
        <div className="row">
          <h1><a href="https://www.metaweather.com/">MetaWeather</a> @ {this.state.weatherData?.title}</h1>
        </div>

        <div className="row">
          <SearchBar 
            aria-label="search bar" 
            updateWidgetState={this.updateWidgetState} 
            handleGeolocation={this.handleGeolocation}/>
        </div>

        <div className="row">
          {
            this.state.loading
              ? <img src={loadingSvg}/>
              : <WeatherCardLarge
                weatherData={this.state.weatherData?.consolidated_weather[0]}/>
          }
        </div>

        <div className="row">
          {/*parse the 2nd to 4th value of consolidated_weather array to display next 3 days of weather*/}
          {
            this.state.loading
              ? <div></div>
              : this.state.weatherData?.consolidated_weather.slice(1,4).map((day: consolidatedWeatherObject) => {
                return <WeatherCardSmall weatherData={day}/>;
              })
          }
        </div>
      </div>
    </div>;
  }
}
