import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>Object Value : {String(Object.entries(objValue))}</div>
        <div>Required Value : {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  requiredStringValue: PropTypes.string.isRequired,
};
