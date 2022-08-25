import "./App.css";
import { useEffect, useState } from "react";
import { WeatherProvider } from "./context/WeatherContext";
import GeneralData from "./components/GeneralData";
import DetailedData from "./components/DetailedData";
import WeatherCards from "./components/WeatherCards";
// import image from "./assets/weather-forecast-bg.jpg";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    axios(
      "https://api.unsplash.com/photos/random?query=weather&client_id=6Ij9CduFEbH2IoIfKPa7YOzjXksvcWoCksfeCXD9nsc&orientation=landscape&count=1"
    ).then((data) => {
      setImage(data.data[0].urls["full"]);
      console.log(`image ${image}`);
      setBgImage({
        backgroundImage: `linear-gradient(0deg,
      rgba(10, 9, 9, 0.82) 23.98%,
      rgba(113, 110, 110, 0.28) 97.92%),url(${image})`,
      });
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div> Loading ....</div>;
  }
  return (
    <WeatherProvider>
      <div className="bg-effect" style={bgImage}></div>
      <div className="container">
        <div className="container-data-info">
          <GeneralData />
          <DetailedData />
        </div>
        <WeatherCards />
      </div>
    </WeatherProvider>
  );
}

export default App;
