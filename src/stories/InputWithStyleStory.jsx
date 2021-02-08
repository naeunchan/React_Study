import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../04/InputWithStyle";

storiesOf("InputWithStyle", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label example", () => <Input name="name" label="name " />)
  .addWithJSX("value example", () => <Input name="name" label="name " value="Do it" />)
  .addWithJSX("errorMessage example", () => (
    <Input name="name" label="name " errorMessage="Please enter your name!" />
  ));
