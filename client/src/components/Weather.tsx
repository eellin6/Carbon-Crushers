import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const Weather = (): React.ReactElement => {
  const [ temperature, setTemperature ] = useState(0);
  const [ idealTemp, setIdealTemp ] = useState('');
  const [ , setLatitude ] = useState(0);
  const [ , setLongitude ] = useState(0);

  const getIdealTemp = (outsideTemp: number): void => {
    const hot = 'We know it\'s hot out there but try to keep your thermostat close to 78°F. If you need to adjust it for comfort, decrease by one degree at a time to find your sweet spot.';
    const warm = 'Open some windows! Give your A/C a break and let some fresh air in.';
    const cold = 'Brr...ring on the blankets! The ideal temperature for your thermostat today is 68°. If you\'re still too chilly, increase it one degree at a time until you find your cozy climate';

    if (outsideTemp > 78) {
      setIdealTemp(hot);
    } else if (outsideTemp < 78 && outsideTemp > 70) {
      setIdealTemp(warm);
    } else {
      setIdealTemp(cold);
    }
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
    return Math.round(celsius * (9 / 5) + 32);
  };

  useEffect (() => {
    getLocation();
  }, []);


  return (
    <div>
      <h3>It's {temperature}°F</h3>
      <p>{idealTemp}</p>
    </div>
  );

};

export default Weather;
