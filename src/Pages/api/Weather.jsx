import { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm
} from "react-icons/wi";

export default function Weather() {

  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "92a6bd21fa2ec974a339c597828bd374";

  useEffect(() => {
    if (!searchCity) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.cod !== 200) {
          setError("City not found");
          setWeather(null);
        } else {
          setWeather(data);
          setError("");
        }
      });

  }, [searchCity]);

  const getBackground = (condition) => {
    switch (condition) {
      case "Clear":
        return "linear-gradient(135deg,#56ccf2,#2f80ed)";
      case "Clouds":
        return "linear-gradient(135deg,#757f9a,#d7dde8)";
      case "Rain":
        return "linear-gradient(135deg,#4b79a1,#283e51)";
      case "Snow":
        return "linear-gradient(135deg,#e6dada,#274046)";
      default:
        return "#f8f9fa";
    }
  };

  const getIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny size={140} color="#FFD93D" />;
      case "Clouds":
        return <WiCloud size={140} />;
      case "Rain":
        return <WiRain size={140} />;
      case "Snow":
        return <WiSnow size={140} />;
      case "Thunderstorm":
        return <WiThunderstorm size={140} />;
      default:
        return <WiCloud size={140} />;
    }
  };

  return (
    <section
      className="weather-page"
      style={{
        background: weather
          ? getBackground(weather.weather[0].main)
          : "linear-gradient(135deg,#89f7fe,#66a6ff)"
      }}
    >
      <div className="container text-center">

        <h1 className="text-white fw-bold mb-4">
          Weather Explorer 🌦
        </h1>

        <div className="d-flex justify-content-center mb-4">
          <input
            className="form-control w-50 me-2"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="btn btn-light"
            onClick={() => setSearchCity(city)}
          >
            Search
          </button>
        </div>

        {error && <p className="text-danger">{error}</p>}

        {weather && (
          <div className="weather-card mx-auto">

            <h3>
              {weather.name}, {weather.sys.country}
            </h3>

            {getIcon(weather.weather[0].main)}

            <h1>{(weather.main.temp - 273).toFixed(1)} °C</h1>

            <p className="text-capitalize">
              {weather.weather[0].description}
            </p>

            <div className="row mt-4">
              <div className="col-4">
                <small>Humidity</small>
                <p>{weather.main.humidity}%</p>
              </div>

              <div className="col-4">
                <small>Wind</small>
                <p>{weather.wind.speed} m/s</p>
              </div>

              <div className="col-4">
                <small>Feels Like</small>
                <p>{(weather.main.feels_like - 273).toFixed(2)}°C</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}