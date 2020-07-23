import moment from 'moment'
import 'moment/locale/es'
import transformWeather from './transformWeather'

const transformForecast = weatherdata => (
     weatherdata.list.filter(item=>(
      moment.unix(item.dt).utc().hour()===6||
      moment.unix(item.dt).utc().hour()===12||
      moment.unix(item.dt).utc().hour()===18
    )).map(item=>({
      weeekday:moment.unix(item.dt).format('ddd'),
      hour:moment.unix(item.dt).utc().hours(),
      data:transformWeather(item)
    }))
);

export default transformForecast;
