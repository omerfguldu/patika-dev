import { useContext, useState, useEffect, createContext } from "react";
import sicaklikIcon from "../assets/sicaklik-icon.png";
import basincIcon from "../assets/basinc-icon.png";
import nemIcon from "../assets/nem-icon.png";
import ruzgarIcon from "../assets/ruzgar-icon.png";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const detailedDataValues = [
    {
      text: "Hissedilen Sıcaklık",
      imageSrc: sicaklikIcon,
      value: "32 °C",
    },
    {
      text: "Nem Oranı",
      imageSrc: nemIcon,
      value: "50 %",
    },
    {
      text: "Hava Basıncı",
      imageSrc: basincIcon,
      value: "1010 PS",
    },
    {
      text: "Rüzgar Hızı",
      imageSrc: ruzgarIcon,
      value: "1.4 km/h",
    },
  ];
  const weatherData = [
    {
      day: "25 Ağustos",
      weatherIcon: "https://openweathermap.org/img/wn/01d@2x.png",
      weatherInfo: "Açık",
      weatherTemp: "30 °C",
      weatherFeelTemp: "Hissedilen Sıcaklık 30 °C",
    },
    {
      day: "26 Ağustos",
      weatherIcon: "https://openweathermap.org/img/wn/01d@2x.png",
      weatherInfo: "Açık",
      weatherTemp: "30 °C",
      weatherFeelTemp: "Hissedilen Sıcaklık 30 °C",
    },
    {
      day: "27 Ağustos",
      weatherIcon: "https://openweathermap.org/img/wn/01d@2x.png",
      weatherInfo: "Açık",
      weatherTemp: "30 °C",
      weatherFeelTemp: "Hissedilen Sıcaklık 30 °C",
    },
    {
      day: "28 Ağustos",
      weatherIcon: "https://openweathermap.org/img/wn/01d@2x.png",
      weatherInfo: "Açık",
      weatherTemp: "30 °C",
      weatherFeelTemp: "Hissedilen Sıcaklık 30 °C",
    },
    {
      day: "29 Ağustos",
      weatherIcon: "https://openweathermap.org/img/wn/01d@2x.png",
      weatherInfo: "Açık",
      weatherTemp: "30 °C",
      weatherFeelTemp: "Hissedilen Sıcaklık 30 °C",
    },
  ];
  const values = {
    weatherData,
    detailedDataValues,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
