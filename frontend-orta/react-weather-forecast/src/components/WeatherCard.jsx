import React from "react";
import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";

function WeatherCard({
  day,
  weatherIcon,
  weatherInfo,
  weatherTemp,
  weatherFeelTemp,
  itemId,
}) {
  const { setDay } = useWeather();
  const allDivs = document.querySelectorAll(".weather-card");

  const onCardClick = (e, day) => {
    setDay(day);

    allDivs.forEach((card) => {
      card.classList.remove("active-weather");
    });
    e.target.closest("div").classList.add("active-weather");
  };

  return (
    <div
      onClick={(e) => onCardClick(e, itemId)}
      className={`weather-card ${itemId === 0 ? "active-weather" : ""}`}
    >
      <p className="day-text">{day}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt=""
      />
      <p className="weather-info-text">{weatherInfo}</p>
      <p className="weather-temp-text">{`${weatherTemp} °C`}</p>
      <p className="weather-feel-temp-text">{`Hissedilen Sıcaklık ${weatherFeelTemp} °C`}</p>
    </div>
  );
}

export default WeatherCard;
