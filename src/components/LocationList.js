import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import './styles.css'

const LocationList = ({ cities, onSelectedLocation }) => {

    const handlerWeatherLocationClick = (city) => {
        onSelectedLocation(city);
    };

    const lstComponets = (cities) =>
        cities.map((city) => ( <
            WeatherLocation key = { city }
            city = { city }
            onWeatherLocationClick = {
                () => handlerWeatherLocationClick(city) }
            />
        ));

    return <div className='locationList' > { lstComponets(cities) } < /div>;
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;
