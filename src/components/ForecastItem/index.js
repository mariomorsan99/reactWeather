import React from 'react'
import PropTypes from 'prop-types'
import WheaterData from './../WeatherLocation/WeatherData';





const ForecastItem =({weeekday, hour, data})=>{
  console.log(data);
  console.log(weeekday);
  console.log(hour);
return(  <div>
   <h2>{weeekday} Hora:{hour}</h2>
   <WheaterData data={data}></WheaterData>
  </div>)
}

ForecastItem.propTypes={
 weeekday:PropTypes.string.isRequired,
 data: PropTypes.shape({
     temperature: PropTypes.number.isRequired,
     wheaterState: PropTypes.string.isRequired,
     humidity: PropTypes.number.isRequired,
     wind: PropTypes.string.isRequired,

 }).isRequired,
}



export default ForecastItem;
