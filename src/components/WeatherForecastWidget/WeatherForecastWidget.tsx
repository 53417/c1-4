import React from 'react';
import './styles.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const WeatherForecastWidget: React.FC = () => {
    return (
        <div className="WeatherForecastWidget">
            <div className="container">
                <div className="row">
                    <h1>Weather</h1>
                </div>

                <div className="row">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Sydney"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"><i className="fas fa-map-marker-alt"></i></button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card col-sm-12">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="card-title">Location</h2>
                                    <p>icons</p>
                                    <br></br>
                                    <p>degrees</p>
                                    <br></br>
                                    <p>description of weather</p>
                                </div>

                                <div className="col-sm-6">
                                    <p>minimum temp</p>
                                    <br></br>
                                    <p>max temp</p>
                                    <br></br>
                                    <p>wind speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card col-sm-4">
                        <div className="card-body">
                            <p>day</p>
                            <br></br>
                            <p>icon</p>
                            <br></br>
                            <p>description</p>
                            <br></br>
                            <p>min max temp</p>
                            <br></br>
                            <p>wind speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherForecastWidget;