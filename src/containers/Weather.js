import React, { Component } from "react";
import WeatherView from "../components/WeatherView";
import DustView from "../components/DustView";

export default class Weather extends Component {
  render() {
    return (
      <>
        <WeatherView />
        <DustView />
      </>
    );
  }
}
