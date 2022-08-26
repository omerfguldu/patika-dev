import WeatherCard from "./WeatherCard";
import { useWeather } from "../context/WeatherContext";
import { useEffect } from "react";
import upperCaseFirstLetters from "../shared/upperCaseFirstLetters";
import formatDate from "../shared/formatDate";

function WeatherCards() {
  const { filteredWeathers } = useWeather();

  useEffect(() => {}, [filteredWeathers]);

  return (
    <div className="weather-cards">
      {filteredWeathers ? (
        filteredWeathers.map((data, index) => (
          <WeatherCard
            key={index}
            itemId={index}
            day={formatDate(data["dt_txt"])}
            weatherIcon={data["weather"][0]["icon"]}
            weatherInfo={upperCaseFirstLetters(
              data["weather"][0]["description"]
            )}
            weatherTemp={Math.round(data["main"]["temp"])}
            weatherFeelTemp={Math.round(data["main"]["feels_like"])}
          />
        ))
      ) : (
        <WeatherCard />
      )}
    </div>
  );
}

export default WeatherCards;
