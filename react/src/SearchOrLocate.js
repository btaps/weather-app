import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchOrLocate.css";

function SearchOrLocate({ setLoading }) {
  const [city, setCity] = useState("");

  useEffect(() => {
    // happening after load
  }, []);

  function updateState(e) {
    setCity(e.target.value);
  }

  function createNewForecast(position) {
    setLoading(true);
    if (position.coords) {
      // use coordinates
      console.log(
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
      );
    } else {
      //use city name
      console.log(city);
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(createNewForecast);
    }
  }

  return (
    <div className="search-container">
      <section className="search">
        <div className="search__div">
          <input
            className="search__input"
            type="text"
            onChange={updateState}
            placeholder="City name"
          ></input>
          <label className="search__label">Select a city</label>
        </div>
        <button
          className="search__button"
          onClick={() => createNewForecast(city)}
          type="submit"
        >
          SUBMIT
        </button>
      </section>
      <section className="locate">
        <button onClick={getLocation} className="locate__button">
          LOCATE
        </button>
      </section>
    </div>
  );
}

SearchOrLocate.propTypes = {
  setLoading: PropTypes.func,
};

export default SearchOrLocate;
