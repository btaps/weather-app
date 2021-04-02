import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchOrLocate from "./SearchOrLocate";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [allForecasts, setAllForecasts] = useState([]);

  useEffect(() => {
    if (loading) {
      // call api in backend and set our new data
      // reset loading
      setLoading(false);

      // call api in backend and use list of forecast
      // set to local state
      setAllForecasts([
        ...allForecasts,
        {
          name: "Ridgemark",
          country: "US",
          weather: "Clear",
          temp: 77,
        },
      ]);
      console.log("loading...");
    }
  }, [loading]);

  return (
    <React.Fragment>
      <Header />
      <SearchOrLocate setLoading={setLoading} />
      <div className="forecasts-container">
        {allForecasts.map((weather, idx) => {
          return (
            <Forecast
              key={idx}
              city={weather.name}
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
