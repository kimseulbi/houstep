import React, { Component } from "react";
import s from "../scss/WeatherView.module.scss";

export default class WeatherView extends Component {
  render() {
    const { city, temp, weather, icon } = this.props;
    return (
      <section className={s.weather}>
        <h1 className={s.weather__city}>{city}</h1>
        <img src={icon} alt="날씨 아이콘" />
        <h3 className={s.weather__temp}>{temp}</h3>
        <h3 className={s.weather__weather}>{weather}</h3>
      </section>
    );
  }
}
