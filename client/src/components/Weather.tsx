import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

const Weather = (): React.ReactElement => {
  const [ temperature, setTemperature ] = useState(0);
  const [ idealTemp, setIdealTemp ] = useState(0);
  const [ , setLatitude ] = useState(0);
  const [ , setLongitude ] = useState(0);

  const getIdealTemp = (outsideTemp: number): void => {
    outsideTemp > 78 ? setIdealTemp(78) : setIdealTemp(68);
  };

  const getWeather = (latitude: number, longitude: number): void => {
    axios.get<AxiosRequestConfig>('/weather', {params: {latitude, longitude}})
      .then(({ data: { data } }: AxiosResponse) => {
        const { temp }: { temp: number } = data[0];
        setTemperature(celsiusToFahrenheit(temp));
        getIdealTemp(temperature);
      })
      .catch((err) => console.warn(err));
  };

  const getLocation = (): Promise<void> => {
    return axios.get<AxiosRequestConfig>('https://api.ipify.org')
      .then(({ data }: AxiosResponse) => {
        return axios.post<AxiosRequestConfig>('/location', { ip: data });
      })
      .then(({ data: { latitude, longitude } }: AxiosResponse) => {
        setLatitude(latitude);
        setLongitude(longitude);
        getWeather(latitude, longitude);
      })
      .catch((err) => console.warn(err));
  };

  const celsiusToFahrenheit = (celsius): number => {
    return celsius * (9 / 5) + 32;
  };

  useEffect (() => {
    getLocation();
  }, []);


  return (
    <div>
      <h3>It's {temperature}°F</h3>
      <p>The ideal temperature for your thermostat today is {idealTemp}°F</p>
    </div>
  );

};

export default Weather;
