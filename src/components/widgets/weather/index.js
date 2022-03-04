import React, { useState, useEffect } from "react";
import {
  Text,
  TextHeader,
  WeatherWrapper,
  WeatherText,
  WeatherIcon,
  WeatherImg,
} from "./weatherElements";

const Weather = () => {
  let url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER}&q=berlin&aqi=yes`;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <WeatherWrapper>
          <WeatherIcon>
            <WeatherImg src={data.current.condition.icon}></WeatherImg>
            <TextHeader>{data.location.name}</TextHeader>
          </WeatherIcon>
          <WeatherText>
            <Text>{`${data.current.temp_c} °C`}</Text>
            <Text>{`${data.current.wind_kph} km/h`}</Text>
            <Text>{data.current.condition.text}</Text>
          </WeatherText>
        </WeatherWrapper>
      ) : null}
    </>
  );
};

export default Weather;
