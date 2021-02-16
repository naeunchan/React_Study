import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHoC";

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf("WithHoC", module)
  .addWithJSX("basic", () => (
    <div>
      <ButtonWithHoC>Hello</ButtonWithHoC>
      <TextWithHoC>Hello</TextWithHoC>
    </div>
  ))
  .addWithJSX("larget example", () => (
    <div>
      <ButtonWithHoC large>Hello</ButtonWithHoC>
      <TextWithHoC large>Hello</TextWithHoC>
    </div>
  ));
