import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <main>{this.props.children}</main>
        <footer>
          <h1 className="logo">
            <span className="readable-hidden">로고</span>
          </h1>
        </footer>
      </React.Fragment>
    );
  }
}
