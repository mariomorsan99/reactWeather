import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation'




class App extends Component {

    render() {
        return ( <
            div className = "App" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            WeatherLocation city = 'Mexico' / >
            <
            /div>
        );
    }
}

export default App;