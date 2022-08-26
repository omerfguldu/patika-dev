import React from "react";
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

  const onCardClick = (day) => {
    setDay(day);
  };

  return (
    <div
      onClick={() => onCardClick(itemId)}
      className="weather-card active-weather"
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
