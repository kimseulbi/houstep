import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../store/ducks/weather";
import { fetchDust } from "../store/ducks/dust";

import WeatherView from "../components/WeatherView";
import DustView from "../components/DustView";

class Weather extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  componentDidMount() {
    this.props.fetchWeather();
    this.props.fetchDust();
    console.log(this.props);
  }

  render() {
    return (
      <>
        <WeatherView />
        <DustView />
      </>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather.weather,
  city: state.weather.city,
  temp: state.weather.temp,
  icon: state.weather.icon,
  loading: state.weather.loading,
  pm10: state.dust.pm10,
  pm25: state.dust.pm25,
  ozone: state.dust.ozone,
  nitrogen: state.dust.nitrogen
});

export default connect(
  mapStateToProps,
  { fetchWeather, fetchDust }
)(Weather);
