import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, RAIN, SNOW, WINDY} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "windy";
    default:
      return "cloud";

  }
};
const getWeatherIcon = (weatherState) => {
  return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x"/>);
};
const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{`${temperature}`}</span>
    <span className='temperatureType'>ºC</span>
  </div>
);
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
