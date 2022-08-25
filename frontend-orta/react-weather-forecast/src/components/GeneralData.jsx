import React from "react";

function GeneralData() {
  return (
    <div className="container-general">
      <img
        src={"https://openweathermap.org/img/wn/04d@2x.png"}
        className="weather-icon"
      ></img>
      <div className="condition-location">
        <p className="weather-condition-text">Açık</p>
        <p className="location-text">Istanbul</p>
      </div>
      <p className="weather-temp-text">32 °C</p>
      <div className="location-input">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="21"
            viewBox="0 0 12 15"
            fill="none"
          >
            <path
              d="M6 0C4.40928 0.00184311 2.88425 0.623288 1.75944 1.72801C0.634626 2.83274 0.001883 4.33054 6.38338e-06 5.89286C-0.00189883 7.16958 0.422723 8.41167 1.20873 9.42857C1.20873 9.42857 1.37237 9.64018 1.3991 9.67071L6 15L10.6031 9.66804C10.6271 9.63964 10.7913 9.42857 10.7913 9.42857L10.7918 9.42696C11.5774 8.41051 12.0019 7.169 12 5.89286C11.9981 4.33054 11.3654 2.83274 10.2406 1.72801C9.11575 0.623288 7.59072 0.00184311 6 0V0ZM6 8.03571C5.56848 8.03571 5.14665 7.91004 4.78785 7.67458C4.42905 7.43912 4.1494 7.10445 3.98426 6.71289C3.81913 6.32134 3.77592 5.89048 3.86011 5.47481C3.94429 5.05913 4.15209 4.67731 4.45722 4.37763C4.76236 4.07794 5.15112 3.87386 5.57435 3.79117C5.99758 3.70849 6.43627 3.75093 6.83494 3.91311C7.23362 4.0753 7.57437 4.34996 7.81411 4.70235C8.05385 5.05474 8.18182 5.46904 8.18182 5.89286C8.18109 6.46096 7.95099 7.00559 7.54198 7.4073C7.13297 7.80901 6.57843 8.03501 6 8.03571V8.03571Z"
              fill="white"
            />
          </svg>
        </span>
        <select name="" id="">
          <option value="lokasyon">Lokasyonu Değiştir</option>
          <option value="istanbul">Istanbul</option>
        </select>
      </div>
    </div>
  );
}

export default GeneralData;
