import React from "react";
import PropTypes from "prop-types";
import "./Forecast.css";

function Forecast({ updateList, id, city, country, forecast, temp }) {
  return (
    <div title="forecast" className="forecast">
      <h3 className="forecast__city">
        {city} <span className="forecast__country">{country}</span>
      </h3>
      <div className="forecast__temp">
        {temp} <span>°F</span>
      </div>
      <div className="forecast__weather">{forecast}</div>
      <div className="forecast__delete" onClick={() => updateList(id)}>
        X
      </div>
    </div>
  );
}

Forecast.propTypes = {
  updateList: PropTypes.func,
  id: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  forecast: PropTypes.string,
  description: PropTypes.string,
  temp: PropTypes.number,
};

export default Forecast;
