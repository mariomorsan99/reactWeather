import React ,{Component} from 'react'
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import getForecastExtend from '../services/getForecastExtend';
import transformForecast from '../services/transformForecast';
import './styles.css';


const days=[
  'Lunes',
  'Martes',
  'Miercoles',
  'Juves',
  'Viernes'
]

const data= {
   tempeture: 10,
   humidity: 10,
   wheaterState: 'CLOUDY',
   wind: 'normal'
}




class ForecastExtenden extends Component {


 constructor(){
   super();
   this.state={ forecastData:null }
 }

 componentDidMount() {
     this.PronosticExtend();
 }

PronosticExtend(){
  const {city} =this.props;
  const api_weather = getForecastExtend(city);
  fetch(api_weather).then(resolve => {
      return resolve.json();
  }).then(weather_data => {
      console.log(weather_data);
      const forecastData= transformForecast(weather_data);
      console.log(forecastData);
      this.setState({forecastData});
  });
}



renderProgres(){
  return' cargando pronostico.....';
}


rederForecastItemDays(forecastData){
 return forecastData.map(forecast=>(<ForecastItem key={`${forecast.weeekday}${forecast.hour}`} weeekday={forecast.weeekday} hour={forecast.hour} data={forecast.data}></ForecastItem>))
}

  render(){
    const {city} =this.props;
    const {forecastData}= this.state;
    return(
      <div>
        <h2 className='forecast-title'>{city}</h2>
          <div className='body-extend'>
          { forecastData?
             this.rederForecastItemDays(forecastData):
              <CircularProgress />
           }
          </div>
      </div>

    )
  }


}

ForecastExtenden.propTypes={
  city: PropTypes.string.isRequired
}


export default ForecastExtenden;
