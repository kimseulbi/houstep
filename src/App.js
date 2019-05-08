import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={MainPage} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
