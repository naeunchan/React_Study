import React from "react";
import { shallow } from "enzyme";
import CheckBox from "../../04/CheckBox";

describe("<CheckBox>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<CheckBox name="required">Test</CheckBox>);
    }).not.toThrow();
  });
  it("displays errorMessage", () => {
    const errorMessage = "Error Message";
    const errorHtml = shallow(
      <CheckBox name="name" errorMessage={errorMessage}>
        Test
      </CheckBox>,
    )
      .dive()
      .find("span")
      .html();
    expect(errorHtml).toContain(errorMessage);
  });
  it("calls back onCahnge on clicked", () => {
    const changeStub = jest.fn();
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="test_name" onChange={changeStub}>
        Test
      </CheckBox>,
    )
      .dive()
      .find("input");
    expect(input).toHaveLength(1);
    input.simulate("click", { target: { checked: true } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith("test_name", true);
    input.simulate("click", { target: { checked: false } });
    expect(changeStub).toHaveBeenCalledWith("test_name", false);
  });
});
