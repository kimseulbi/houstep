import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Weather from "../containers/Weather";

class MainPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>날씨</title>
        </Helmet>
        <Layout>
          <Weather />
        </Layout>
      </>
    );
  }
}

export default MainPage;
