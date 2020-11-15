import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import React from "react";
import metaWeather from "../../api/metaWeather";
import { DebounceInput } from 'react-debounce-input';
import { metaWeatherLocationSearchResponse } from '../../api/types'

type searchBarState = {
    locationQuery: string,
    locationList: metaWeatherLocationSearchResponse[]
}

export default class SearchBar extends React.Component<any> {
    state: searchBarState = {
        locationQuery: 'Sydney',
        locationList: []
    }

    handleGeolocationButton = async () => {
        if (navigator.geolocation) {
            let geolocation: {latitude?: number, longitude?: number} = {}
            await navigator.geolocation.getCurrentPosition((position: any) => {
                geolocation = position
            })
            if(geolocation.latitude && geolocation.longitude) {
                const location = await metaWeather.getLocationData({
                    latitude: geolocation.latitude,
                    longitude: geolocation.longitude
                })
                const weatherData = await metaWeather.getWeatherData(location.woeid.toString())
                this.props.updateWidgetState({
                    weatherData
                })
            }
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    handleSearch = async (event: any) => {
        const locationList = await metaWeather.getLocationData(event.target.value)
        this.setState({
            locationQuery: event.target.value,
            locationList
        })
    }

    handleLocationListSelect = async (index: number) => {
        const selectedLocation = this.state.locationList[index]
        const weatherData = await metaWeather.getWeatherData(selectedLocation.woeid.toString())
        this.props.updateWidgetState({
            weatherData
        })
        this.setState({
            locationQuery: selectedLocation.title,
            locationList: []
        })
    }

    render() {
        return <div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>

                    <DebounceInput debounceTimeout={500} onChange={(event: any) => this.handleSearch(event)} value={this.state.locationQuery}></DebounceInput>

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleGeolocationButton}><i className="fas fa-map-marker-alt"></i></button>
                    </div>
                </div>
            </div>

            <ul className="list-group">
                {this.state.locationList?.map((location: metaWeatherLocationSearchResponse, index: number ) => {
                    return <li className="list-group-item" onClick={() => this.handleLocationListSelect(index)}>{location.title}</li>
                })}
            </ul>
        </div>
    }
}