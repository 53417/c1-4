// example JSON: https://www.metaweather.com/api/location/1105779/
export interface metaWeatherLocationResponse {
    consolidated_weather: consolidatedWeatherObject[],
    time: Date,
    sun_rise: Date,
    sun_set: Date,
    timezone_name: string,
    parent: {
        title: string,
        location_type: string,
        woeid: number,
        latt_long: string
    },
    sources: sourcesObject[],
    title: string,
    location_type: string,
    woeid: number,
    latt_long: string,
    timezone: string
}

export interface consolidatedWeatherObject {
    id: number,
    weather_state_name: string,
    weather_state_abbr: string,
    wind_direction_compass: string,
    created: Date,
    applicable_date: string,
    min_temp: number,
    max_temp: number,
    the_temp: number,
    wind_speed: number,
    wind_direction: number,
    air_pressure: number,
    humidity: number,
    visibility: number,
    predictability: number
}

interface sourcesObject {
    title: string,
    slug: string,
    url: string,
    crawl_rate: number
}

// example JSON: https://www.metaweather.com/api/location/search/?query=sydney
export interface metaWeatherLocationSearchResponse {
    title: string,
    location_type: string,
    woeid: number | string,
    latt_long: string
}