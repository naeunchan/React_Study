import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../03/Input";

storiesOf("Input", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label example", () => <Input name="name" label="name " />)
  .addWithJSX("onChange example", () => (
    <Input name="name" onChange={action("onChange event occured!")} />
  ));
