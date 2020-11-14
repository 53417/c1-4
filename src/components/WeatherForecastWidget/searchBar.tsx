import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import React from "react";

const searchBar: React.FC = () => {
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
            </div>
        </div>
    )
}

export default searchBar;