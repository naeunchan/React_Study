import React from "react";
import withState from "recompose/withState";
import Button from "../04/Button";

export const withCountState = withState("count", "setCount", 0);

function Counter({ count, setCount }) {
  const increaseCount = () => setCount((value) => value + 1);

  return (
    <div>
      now : {count}
      <Button onPress={increaseCount}>counting</Button>
    </div>
  );
}

export const CounterWithCountState = withCountState(Counter);
