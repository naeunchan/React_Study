import React, { Component } from "react";
import Counter from "./03/Counter2";

class App extends Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
    this.state = {
      count: 1,
    };
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} onAdd={this.increaseCount} />
      </div>
    );
  }
}

export default App;
