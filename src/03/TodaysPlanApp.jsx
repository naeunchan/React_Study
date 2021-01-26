import React, { Component } from "react";
import TodaysPlan from "./TodaysPlan";

class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan /> : null}
        <button onClick={onButtonClick}>no plans</button>
      </div>
    );
  }
}

export default TodaysPlanApp;
