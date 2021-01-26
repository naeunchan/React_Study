import React, { Component } from "react";

export default class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStatedFromProps 호출");
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor 호출");
  }
  componentDidMount() {
    console.log("componentDidUpdate 호출");
  }
  componentDidUpdate() {
    console.log("componentDidUpdated 호출");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount 호출");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate 호출");
    return {};
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 호출");
    return false;
  }
  render() {
    console.log("render 호출");
    return null;
  }
}
