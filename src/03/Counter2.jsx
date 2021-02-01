import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter2 extends Component {
  render() {
    return (
      <div>
        Current Counter : {this.props.count}
        <button onClick={() => this.props.onAdd()}>Counting</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
