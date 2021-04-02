import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchOrLocate from "./SearchOrLocate";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  const [allForecasts, setAllForecasts] = useState([]);

  function updateForecasts(newEntry) {
    setAllForecasts([...allForecasts, newEntry]);
  }

  function deleteForecast(id) {
    const tempList = allForecasts.filter((forecast) => forecast.id !== id);
    setAllForecasts(tempList);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:8000/api/forecasts/${id}/`,
      requestOptions
    ).catch((err) => console.log(`Error deleting forecast: ${err}`));
  }

  useEffect(() => {
    async function getAll() {
      try {
        const response = await fetch("http://localhost:8000/api/forecasts/");
        const data = await response.json();
        setAllForecasts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAll();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <SearchOrLocate updateList={updateForecasts} />
      <div className="forecasts-container">
        {allForecasts.map((weather) => {
          return (
            <Forecast
              updateList={deleteForecast}
              key={weather.id}
              id={weather.id}
              city={weather.city}
              country={weather.country}
              forecast={weather.weather}
              temp={weather.temp}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
