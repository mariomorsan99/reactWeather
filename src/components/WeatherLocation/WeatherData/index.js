import React from 'react';
import PropTypes from 'prop-types'
import WheaterExtraInfo from './WheaterExtraInfo';
import WheaterTempeture from './WheaterTempeture';

import {
    CLOUD,
    CLOUDY,
    SUN,
}
from '../../../constants/weateher';

import './styles.css';


const WheaterData = ({ data: { tempeture, wheaterState, humidity, wind } }) => {

    return (
      <div className = "weatherDataCont" >
        <WheaterTempeture temperature = { tempeture }
        wheaterState = { wheaterState }
        />
        <WheaterExtraInfo humidity = { humidity }
        wind = { wind }
        />
        </div >
      )
};


WheaterData.propTypes = {

    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        wheaterState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    }).isRequired,

};


export default WheaterData;
