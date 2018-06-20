import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {RAIN} from './../../../constants/weathers';
import './style.css';

const WeatherData = () => (
  <div className='weatherDataCont'>
    <WeatherTemperature temperature={29} weatherState={RAIN}/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
  </div>
);

export default WeatherData;
