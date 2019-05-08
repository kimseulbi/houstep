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
          <title>No.1 온라인 시공판매, 하우스텝</title>
        </Helmet>
        <Layout>
          <Weather />
        </Layout>
      </>
    );
  }
}

export default MainPage;
