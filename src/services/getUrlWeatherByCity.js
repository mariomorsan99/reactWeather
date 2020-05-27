import { urlBase, apiKey } from './../constants/api_url'

const getUrlWeatherByCity = city => {
    return `${urlBase}?q=${city}&appid=${apiKey}`;
}

export default getUrlWeatherByCity;