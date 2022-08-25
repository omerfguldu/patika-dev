import React from "react";

function DetailedDataItem({ text, imageSrc, value }) {
  return (
    <div className="container-detailed-info">
      <img src={imageSrc} alt="weather-forecast-icon" />
      <div className="detailed-info">
        <p>{text}</p>
        <p className="detailed-text">{value}</p>
      </div>
    </div>
  );
}

export default DetailedDataItem;
