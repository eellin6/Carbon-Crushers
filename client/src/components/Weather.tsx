import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const Weather = (): React.ReactElement => {
  const [ temperature, setTemperature ] = useState(0);
  const [ , setIdealTemp ] = useState(0);

  const getLocation = (): Promise<void> => {
    return axios.get('https://api.ipify.org')
      .then(({ data }) => axios.post('/location', { ip: data }))
      .then(({ data: { latitude, longitude } }) => {
        getWeather(latitude, longitude);
      })
      .catch((err) => console.warn(err));
  };

  const celsiusToFahrenheit = (celsius): number => {
    return celsius * (9 / 5) + 32;
  };

  const getIdealTemp = (outsideTemp): void => {
    outsideTemp > 78 ? setIdealTemp(78) : setIdealTemp(68);
  };

  const getWeather = (lat: number, long: number): void => {
    axios.get<AxiosResponse>('/weather')
      .then(({ data }: AxiosResponse) => {
        setTemperature(celsiusToFahrenheit(data));
        getIdealTemp(temperature);
      })
      .catch((err) => console.warn(err));
  };

  useEffect (() => {
    getLocation();
  }, []);


  return (
    <div className='weather-wrap'>
      <h3>It's {temperature}°F</h3>
      <p>The ideal temperature for your thermostat today is 74°</p>
    </div>
  );

};

export default Weather;
