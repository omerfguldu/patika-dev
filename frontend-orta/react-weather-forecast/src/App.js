import img from "./assets/weather-forecast-bg.jpg";
import "./App.css";
import GeneralData from "./components/GeneralData";
import DetailedData from "./components/DetailedData";

function App() {
  return (
    <>
      <div className="bg-effect">
        {/* <img src={img} className="bg-image"></img> */}
      </div>
      <div className="container">
        <div className="container-data">
          <GeneralData />
          <DetailedData />
        </div>
      </div>
    </>
  );
}

export default App;
