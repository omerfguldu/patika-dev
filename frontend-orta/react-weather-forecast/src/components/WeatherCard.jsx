import React from "react";

function WeatherCard({
  day,
  weatherIcon,
  weatherInfo,
  weatherTemp,
  weatherFeelTemp,
}) {
  return (
    <div className="weather-card active-weather">
      <p className="day-text">{day}</p>
      <img src={weatherIcon} alt="" />
      <p className="weather-info-text">{weatherInfo}</p>
      <p className="weather-temp-text">{weatherTemp}</p>
      <p className="weather-feel-temp-text">{weatherFeelTemp}</p>
    </div>
  );
}

export default WeatherCard;
