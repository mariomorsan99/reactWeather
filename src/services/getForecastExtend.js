import { urlExtend, apiKey } from './../constants/api_url'

const getForecastExtend = city => {
    return `${urlExtend}?q=${city}&appid=${apiKey}`;
}

export default getForecastExtend;
