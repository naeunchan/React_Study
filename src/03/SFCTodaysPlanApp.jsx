import React from "react";
import TodaysPlan from "./TodaysPlan";

export default function SFCTodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      {console.log({ hasPlan })}
      <button onClick={onButtonClick}>no plans</button>
    </div>
  );
}
