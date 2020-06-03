import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList'


const cities=[
  'Mexico',
  'Bogota',
];


class App extends Component {

handlerWeatherLocation = city=>{
  console.log('handlerWeatherLocation');
}

    render() {
        return (
          <div className = "App" >
            < img src = { logo } className = "App-logo" alt = "logo" />
            < LocationList cities={cities} onSelectedLocation={this.handlerWeatherLocation} />
            </div>
        );
    }
}

export default App;
