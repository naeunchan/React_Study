import React, { Component } from "react";

export default class BoolComponent extends Component {
  render() {
    const message = this.props.bored ? "Play" : "Do it";
    return <div className="message-container">{message}</div>;
  }
}
