import WeatherCard from "./WeatherCard";
import { useWeather } from "../context/WeatherContext";

function WeatherCards() {
  const { weatherData } = useWeather();

  return (
    <div className="weather-cards">
      {weatherData.map((data, index) => (
        <WeatherCard
          key={index}
          day={data.day}
          weatherIcon={data.weatherIcon}
          weatherInfo={data.weatherInfo}
          weatherTemp={data.weatherTemp}
          weatherFeelTemp={data.weatherFeelTemp}
        />
      ))}
    </div>
  );
}

export default WeatherCards;
