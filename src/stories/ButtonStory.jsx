import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Button from "../04/Button";

storiesOf("Button", module)
  .addWithJSX("basic", () => <Button>Send!</Button>)
  .addWithJSX("large example", () => <Button large>Send!</Button>)
  .addWithJSX("xlarge example", () => <Button xlarge>Send!</Button>)
  .addWithJSX("small example", () => <Button small>Send!</Button>)
  .addWithJSX("xsmall example", () => <Button xsamll>Send!</Button>)
  .addWithJSX("primary example", () => <Button primary>Send!</Button>)
  .addWithJSX("secondary example", () => <Button secondary>Send!</Button>)
  .addWithJSX("primary and large example", () => (
    <Button primary large>
      Send!
    </Button>
  ));
