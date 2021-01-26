import React, { Component } from "react";

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.formData = "no data";
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data";
    this.loading = false;
    this.formData = `${data} ${this.formData}`;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>loading: {String(this.loading)}</span>
        <span>result: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
