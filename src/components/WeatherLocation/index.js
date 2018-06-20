import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'


const WeatherLocation = () => (  // funcion
  <div>
    <Location city={'Cali'}/>
    <WeatherData />
  </div>

);

export default WeatherLocation;
