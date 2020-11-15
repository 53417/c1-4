import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import metaWeather from '../../api/metaWeather';
import { DebounceInput } from 'react-debounce-input';
import { metaWeatherLocationSearchResponse } from '../../api/types';
import './styles.css';

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

          <DebounceInput debounceTimeout={500} onChange={(event: any) => this.handleSearch(event)} value={this.state.locationQuery} placeholder="Search"/>

          <div className="input-group-append ">
            <button className="btn btn-outline-secondary" type="button" onClick={this.props.handleGeolocation}><i className="fas fa-map-marker-alt"/></button>
          </div>
        </div>

        <ul className="list-group">
          {this.state.locationList?.map((location: metaWeatherLocationSearchResponse, index: number ) => {
            return <li key={index} className="list-group-item searchResult" onClick={() => this.handleLocationListSelect(index)}>{location.title}</li>;
          })}
        </ul>
      </div>;
    }
}
