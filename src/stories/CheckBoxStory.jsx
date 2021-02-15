import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CheckBox from "../04/CheckBox";
import Text from "../04/Text";

storiesOf("CheckBox", module)
  .addWithJSX("basic", () => <CheckBox name="agree" />)
  .addWithJSX("children example", () => (
    <CheckBox name="agree">
      <Text>Agree</Text>
    </CheckBox>
  ))
  .addWithJSX("label example", () => (
    <CheckBox name="agree" label="name">
      <Text>Agree</Text>
    </CheckBox>
  ))
  .addWithJSX("onChange example", () => (
    <CheckBox name="agree" onChange={action("onChange event occur!")}>
      <Text>Agree</Text>
    </CheckBox>
  ))
  .addWithJSX("checked example", () => (
    <CheckBox name="agree" label="name" checked>
      <Text>Agree</Text>
    </CheckBox>
  ))
  .addWithJSX("errorMessage example", () => (
    <CheckBox name="agree" label="name" errorMessage="needed agree">
      <Text>agree</Text>
    </CheckBox>
  ))
  .addWithJSX("autoFocus example", () => (
    <CheckBox name="agree" label="name" autoFocus>
      <Text>agree</Text>
    </CheckBox>
  ));
