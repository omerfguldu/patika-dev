import DetailedDataItem from "./DetailedDataItem";
import { useWeather } from "../context/WeatherContext";

function DetailedData() {
  const { detailedDataValues } = useWeather();

  return (
    <div className="container-detailed">
      {detailedDataValues.map((value, index) => (
        <DetailedDataItem
          key={index}
          text={value.text}
          imageSrc={value.imageSrc}
          value={value.value}
        />
      ))}
    </div>
  );
}

export default DetailedData;
