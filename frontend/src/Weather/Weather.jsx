import { useState } from "react";
import styles from "./Weather.module.css";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const submitForm = async () => {
    if (city.trim() === "") {
      setError("Please enter city name first");
      setWeather(null);
      return;
    }

    try {
      const api = await fetch("http://localhost:8080/weather", {
        method: "POST",
        body: JSON.stringify({ city }),
        headers: { "Content-Type": "application/json" },
      });

      const response = await api.json();

      if (api.status === 200) {
        setWeather(response.response);
        setError("");
      } else {
        setWeather(null);
        setError("City not found 😞");
      }
    } catch (e) {
      console.error(e);
      setError("Something went wrong. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className={styles.main}>
      {/* ✅ Input Section */}
      <div className={styles.input_container}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button className={styles.search_btn} onClick={submitForm}>
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>

      {/* ✅ Error message */}
      {error && <p className={styles.error}>{error}</p>}

      {/* ✅ Weather card only if data available */}
      {weather && (
        <div className={styles.card_container}>
          <div className={styles.img_container}>
            <img
              src={weather.img?.image}
              className={styles.weather_img}
              alt="Weather"
            />
          </div>

          <div className={styles.info_container}>
            <p>
              🌡 Temperature: <b>{weather.temp}°C</b>
            </p>
            <p>
              ⬇ Min: <b>{weather.temp_min}°C</b> | ⬆ Max:{" "}
              <b>{weather.temp_max}°C</b>
            </p>
            <p>
              💧 Humidity: <b>{weather.humidity}%</b>
            </p>
            <p>
              ☁️ Weather: <b>{weather.description}</b>
            </p>
            <p>
              🧥 Feels like: <b>{weather.feels_like}°C</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
