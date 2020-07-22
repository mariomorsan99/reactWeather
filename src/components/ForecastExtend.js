import React ,{Component} from 'react'
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days=[
  'Lunes',
  'Martes',
  'Miercoles',
  'Juves',
  'Viernes'
]
class ForecastExtenden extends Component {

rederForecastItemDays(){
  return days.map(day=>(<ForecastItem weeekday={day}></ForecastItem>))

}



  render(){
    const {city} =this.props;
    return(
      <div>
        <h2 className='forecast-title'>{city}</h2>
          <div className='body-extend'>
          {this.rederForecastItemDays()}
          </div>
      </div>

    )
  }


}

ForecastExtenden.propTypes={
  city: PropTypes.string.isRequired
}


export default ForecastExtenden;
