import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>bool : {boolValue}</span>
        <span>num : {numValue}</span>
        <span>array : {arrayValue}</span>
        <span>obj : {String(objValue)}</span>
        <span>node : {nodeValue}</span>
        <span>func : {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};
