import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildProperty extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};
