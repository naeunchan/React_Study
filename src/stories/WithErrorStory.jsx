import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../04/InputWithStyle";
import withError from "../05/withError";

const InputWithError = withError("invalid value")(Input);

storiesOf("WithError", module)
  .addWithJSX("basic", () => <InputWithError name="name" hasError />)
  .addWithJSX("errorMessage example", () => (
    <InputWithError name="name" hasError errorMessage="required content!" />
  ));
