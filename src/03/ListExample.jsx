import React, { Component } from "react";

export default class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>price: {price} won</div>);
    return (
      <div>
        <label>Price List</label>
        {prices}
      </div>
    );
  }
}
