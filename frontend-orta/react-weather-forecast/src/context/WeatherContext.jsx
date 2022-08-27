import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import sicaklikIcon from "../assets/sicaklik-icon.png";
import basincIcon from "../assets/basinc-icon.png";
import nemIcon from "../assets/nem-icon.png";
import ruzgarIcon from "../assets/ruzgar-icon.png";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const getWeatherData = (lat = "37.0", long = "35.3213") => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&lang=tr&appid=64f23b0bcf51f94ad0b899c6f00a132d&cnt=40&units=metric`
    ).then((res) => setWeatherInfo(res));
  };

  const [day, setDay] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState(null);
  if (!weatherInfo) getWeatherData();

  const [filteredWeathers, setFilteredWeathers] = useState(weatherInfo);

  useEffect(() => {
    if (weatherInfo) {
      setFilteredWeathers(
        weatherInfo.data["list"].filter((weather, index) => {
          return weather["dt_txt"].includes("12:00");
        })
      );
    }
  }, [weatherInfo]);

  const detailedDataValues = [
    {
      text: "Hissedilen Sıcaklık",
      imageSrc: sicaklikIcon,
      value: filteredWeathers
        ? `${Math.round(filteredWeathers[day]["main"]["temp"])} °C`
        : "-",
    },
    {
      text: "Nem Oranı",
      imageSrc: nemIcon,
      value: filteredWeathers
        ? `${Math.round(filteredWeathers[day]["main"]["humidity"])} %`
        : "-",
    },
    {
      text: "Hava Basıncı",
      imageSrc: basincIcon,
      value: filteredWeathers
        ? `${Math.round(filteredWeathers[day]["main"]["pressure"])} PS`
        : "-",
    },
    {
      text: "Rüzgar Hızı",
      imageSrc: ruzgarIcon,
      value: filteredWeathers
        ? `${Math.round(filteredWeathers[day]["wind"]["speed"])} km/h`
        : "-",
    },
  ];

  const values = {
    detailedDataValues,
    weatherInfo,
    setWeatherInfo,
    filteredWeathers,
    getWeatherData,
    day,
    setDay,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
