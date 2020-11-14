import React from 'react';
import './App.css';
import WeatherForecastWidget from './components/WeatherForecastWidget/WeatherForecastWidget'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <WeatherForecastWidget></WeatherForecastWidget>
    </div>
  );
}

export default App;
