import React, { Component } from 'react';
import Location from './Location';
import WheaterData from './WeatherData';
import convert from 'convert-units';
import './styles.css';
import PropTypes from 'prop-types'
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';


const data = {
    temperature: 5,
    wheaterState: null,
    humidity: 30,
    wind: '10 m/s'
}

//componente iclass
class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        };
    }


    componentDidMount() {
        console.log('componentDidMount')
        this.Alerta();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    Alerta = () => {
        //call service
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });

        });
    }

    render() {
        const {onWeatherLocationClick}= this.props;
        const { city, data } = this.state;
        return (
          <div className = "WeatherLocationCont" onClick={onWeatherLocationClick} >
                < Location city = { city } /> { data ?
                < WheaterData data = { data } /> : < CircularProgress size = { 50 } / >
            }
          </div >
    );
}
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}


export default WeatherLocation;
