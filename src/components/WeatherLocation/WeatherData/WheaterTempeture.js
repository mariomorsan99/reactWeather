import React from 'react'
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import './styles.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
}
from '../../../constants/weateher';


const icons = {
    [SUN]: "day-sunny",
    [CLOUDY]: "cloudy",
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWheaterIcon = wheaterState => {
    const icon = icons[wheaterState];
    const sizeicon="4x";
    if (icon)
        return <WeatherIcons className="wicon" name = { icon }
    size = "2x" / >
        else
            return <WeatherIcons className="wicon" name = { "day-sunny" }
    size = "2x" / >
}

const WheaterTempeture = ({ temperature, wheaterState }) => (
  <div className="WheaterTempetureCont" > {
        getWheaterIcon(wheaterState)
    }
    <span className="temperature" > { `${temperature}` } < /span>
    <span className="temperatureType">{ `C°`}</span>
    </div >
);

WheaterTempeture.propTypes = {

    temperature: PropTypes.number.isRequired,
    wheaterState: PropTypes.string.isRequired

};

export default WheaterTempeture;
