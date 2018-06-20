import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    //[<div>{humidity}</div>,<div>{wind}</div>] // dos divs o varios tags
    /*<div> // forma normal
      <span>{humidity}</span>
      <span>{wind}</span>
    </div>*/
    <div className='weatherExtraInfoCont'>
      <span className='extrainfoText'>Humidity: {`${humidity}% `}</span>
      <span className='extrainfoText'>Wind: {`${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
