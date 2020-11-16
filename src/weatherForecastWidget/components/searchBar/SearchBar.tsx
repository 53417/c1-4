import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import metaWeather from '../../../api/metaWeather/metaWeather';
import { DebounceInput } from 'react-debounce-input';
import { metaWeatherLocationSearchResponse } from '../../../api/metaWeather/types';
import '../../app/styles.css';

type searchBarState = {
    locationQuery: string,
    locationList: metaWeatherLocationSearchResponse[]
}

export default class SearchBar extends React.Component<any> {
    state: searchBarState = {
      locationQuery: '',
      locationList: []
    }

    handleSearch = async (event: any) => {
      const locationList = await metaWeather.getLocationData(event.target.value);
      this.setState({
        locationQuery: event.target.value,
        locationList
      });
    }

    handleLocationListSelect = async (index: number) => {
      const selectedLocation = this.state.locationList[index];
      const weatherData = await metaWeather.getWeatherData(selectedLocation.woeid.toString());
      this.props.updateWidgetState({
        weatherData
      });
      this.setState({
        locationQuery: selectedLocation.title,
        locationList: []
      });
    }

    render() {
      return <div className="searchBar">
        <div className="input-group col-sm-12">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search"/>
            </span>
          </div>

          <DebounceInput 
            aria-label="search location" 
            debounceTimeout={500} 
            onChange={(event: any) => this.handleSearch(event)} 
            value={this.state.locationQuery} 
            placeholder="Search"/>

          <div className="input-group-append ">
            <button 
              aria-label="weather by geolocation" 
              className="btn btn-outline-secondary" 
              type="button" 
              onClick={this.props.handleGeolocation}>
              <i className="fas fa-map-marker-alt"/>
            </button>
          </div>
        </div>

        <ul className="list-group">
          {this.state.locationList?.map((location: metaWeatherLocationSearchResponse, index: number ) => {
            return <li 
              key={index} 
              className="list-group-item searchResult" 
              onClick={() => this.handleLocationListSelect(index)}>{location.title}
            </li>;
          })}
        </ul>
      </div>;
    }
}
