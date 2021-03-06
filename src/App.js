import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LocationList from "./components/LocationList";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ForecastExtenden from './components/ForecastExtend'

import {createStore} from 'redux';

const cities = ["Bogota", "London","Mexico", "Argentina"];
const store=createStore(()=>{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity= value=> ({type:'setCity',value})

class App extends Component {

    constructor(){
      super();
      this.state={city:null};
    }

    handlerWeatherLocation = (city) => {
        console.log("handlerWeatherLocation");
        this.setState({city});
        store.dispatch(setCity(city))

    };

    render() {
        const {city}=this.state;
        return (
          <Grid className="App">
            <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                 Wheather App
                   <img src = { logo } className = "App-logo" alt = "logo" / >
                </Typography>
              </Toolbar>
            </AppBar>
            </Row>
              <Row>
              <Col xs={12} md={6}>

              < LocationList
                cities = { cities }
                onSelectedLocation = { this.handlerWeatherLocation }>
              </LocationList>
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className="details">
                  {
                    city===null?
                    <h1>no hay ciudad</h1>
                    :<ForecastExtenden city={city}></ForecastExtenden>
                  }
                  </div>
                </Paper>
              </Col>
            </Row>
          </Grid>
        );
    }
}

export default App;
