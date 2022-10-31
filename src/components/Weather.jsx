import { useState } from "react";
import "./Weather.css";
import { Spinner } from "./Spinner";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { BackgroundVideo } from "./BackgroundVideo";

export const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);
  const { weather } = useFetchWeather(setIsLoading);

  if (isLoading) {
    return <Spinner />;
  }

  if (!weather) {
    return null;
  }

  const changeTemp = () => {
    setIsCelcius(!isCelcius);
  };
  return (
    <>
      <div className="card">
        <h2>
          <span>{weather.name}, </span>
          <span>{weather.sys?.country}</span>
        </h2>
        <div className="img-temp">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
            alt=""
            width="120px"
          />
          <div className="temp">
            <h1>
              {Math.floor(
                isCelcius
                  ? weather.main?.temp - 273.15
                  : (weather.main?.temp - 273.15) * 1.8 + 32
              )}
              °
            </h1>
            <div className="card-buttons">
              <button
                onClick={changeTemp}
                className={isCelcius ? "button-selected" : ""}
              >
                C
              </button>
              <button
                onClick={changeTemp}
                className={!isCelcius ? "button-selected" : ""}
              >
                F
              </button>
            </div>
          </div>
        </div>
        <div className="descripcion">
          <p>{`"${weather.weather?.[0].description}"`}</p>
          <p>
            {<i className="fa-solid fa-wind"></i>} win speed:{" "}
            {weather.wind?.speed} mts/s
          </p>
          <p>
            <i className="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}%
          </p>
          <p>
            <i className="fa-solid fa-temperature-three-quarters"></i> Pressure:{" "}
            {weather.main?.pressure} hPa
          </p>
        </div>
      </div>
      <BackgroundVideo name={weather.weather[0].icon} />
    </>
  );
};
