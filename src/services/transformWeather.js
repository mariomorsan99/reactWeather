import convert from 'convert-units';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
}
from '../constants/weateher';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to('C');
}

const getWheatherState = weather_data => {
    const {id} = weather_data;
    if(id< 300){
      return THUNDER;
    }
    else if( id < 400){
       return DRIZZLE;
    }
    else if( id < 600){
       return RAIN;
    }
    else if( id < 700){
       return SNOW;
    }
    else if( id === 800){
       return SUN;
    }
    else {
       return CLOUDY;
    }
}

const transformWeather = weatherData => {
    //desestructuring
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const wheaterState = getWheatherState(weatherData.weather[0]);
    //constante literal
    const data = {
        humidity,
        tempeture:Math.trunc(getTemp(temp)),
        wheaterState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;
