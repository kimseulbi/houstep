import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <main>{this.props.children}</main>
        <footer>
          <p>로고</p>
        </footer>
      </React.Fragment>
    );
  }
}
