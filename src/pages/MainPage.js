import React, { Component } from "react";
import Layout from "../components/Layout";
import Weather from "../containers/Weather";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Weather />
      </Layout>
    );
  }
}
