// proxied to "https://www.metaweather.com" in setupProxy.js for dev
// const baseUrl = '/api';

// using cors-anywhere for github pages
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api';

const getLocationData = async (query: string | {latitude: number; longitude: number}) => {
  let url = baseUrl;
  if( typeof query === 'object') {
    url += `/location/search/?lattlong=${query.latitude},${query.longitude}`;
  } else {
    url += `/location/search/?query=${query}`;
  }
  const res = await fetch(url);
  if (res.ok) {
    const parsedRes = await res.json();
    return parsedRes;
  }
};

const getWeatherData = async (woeid: string) => {
  const url = `${baseUrl}/location/${woeid}`;
  const res = await fetch(url);
  if (res.ok) {
    const parsedRes = await res.json();
    return parsedRes;
  }
};

export default {
  getLocationData,
  getWeatherData
};
