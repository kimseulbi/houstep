import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../store/ducks/weather";
import { fetchDust } from "../store/ducks/dust";

import {
  getTemp,
  getIcon,
  getCity,
  getDate,
  getWeather
} from "../modules/index";

import WeatherView from "../components/WeatherView";
import DustView from "../components/DustView";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getDate()
    };
  }

  componentDidMount() {
    this.props.fetchWeather();
    this.props.fetchDust();
  }

  render() {
    const { city, temp, weather, icon } = this.props;
    const { pm10, pm25, ozone, nitrogen } = this.props;
    return (
      <>
        <WeatherView
          city={getCity(city)}
          icon={getIcon(icon)}
          temp={getTemp(temp)}
          weather={getWeather(weather)}
        />
        <DustView
          pm10={pm10}
          pm25={pm25}
          ozone={ozone}
          nitrogen={nitrogen}
          date={this.state.date}
        />
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
