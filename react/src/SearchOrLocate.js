import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchOrLocate.css";
// import axios from "axios";

function addCityToDB(forecast, update) {
  const data = JSON.stringify(forecast);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: data,
    redirect: "follow",
  };

  fetch("http://localhost:8000/api/forecasts/", requestOptions)
    .then((response) => response.json())
    .then((data) => update(data))
    .catch((err) => console.log(`Error inserting data to DB: ${err}`));
}

function SearchOrLocate({ updateList }) {
  const [city, setCity] = useState("");

  function updateState(e) {
    setCity(e.target.value);
  }

  async function createNewForecast(position) {
    try {
      if (position.coords) {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=cc4153e2e5a1f18446b28046a92a1f7b&units=imperial`
        );
        const data = await response.json();
        const newForecast = {
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          temp: Math.round(data.main.temp),
        };
        addCityToDB(newForecast, updateList);
      } else {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc4153e2e5a1f18446b28046a92a1f7b&units=imperial`
        );
        const data = await response.json();
        const newForecast = {
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          temp: Math.round(data.main.temp),
        };
        addCityToDB(newForecast, updateList);
      }
    } catch (err) {
      console.log(err);
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
  updateList: PropTypes.func,
};

export default SearchOrLocate;
