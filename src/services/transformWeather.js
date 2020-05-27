import convert from 'convert-units';
import {
    CLOUD,
    CLOUDY,
    SUN,
}
from '../constants/weateher';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to('C');
}

const getWheatherState = weather_data => {
    return SUN;
}

const transformWeather = weatherData => {
    //desestructuring
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const wheaterState = getWheatherState(weatherData);

    //constante literal
    const data = {
        humidity,
        tempeture: getTemp(temp),
        wheaterState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;
