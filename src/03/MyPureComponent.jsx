import React from "react";

export default class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log("MyPureComponent 새로 고침");
  }

  render() {
    return null;
  }
}
