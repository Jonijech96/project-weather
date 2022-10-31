import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetchWeather = (setIsLoading) => {
  const [weather, setWeather] = useState(null);
  const key = "1b97840960d625aa7d7aa27e88630fbd";

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        )
        .then((res) => {
          setIsLoading(false);
          setWeather(res.data);
        });
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  return { weather };
};
