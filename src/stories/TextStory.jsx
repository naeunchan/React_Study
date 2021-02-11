import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../04/Text";

storiesOf("Text", module)
  .addWithJSX("basic", () => <Text>Hello World!</Text>)
  .addWithJSX("large example", () => <Text large>Hello World!</Text>)
  .addWithJSX("xlarge example", () => <Text xlarge>Hello World!</Text>)
  .addWithJSX("small example", () => <Text small>Hello World!</Text>)
  .addWithJSX("xsmall example", () => <Text xsmall>Hello World!</Text>)
  .addWithJSX("primary example", () => <Text primary>Hello World!</Text>)
  .addWithJSX("secondary example", () => <Text secondary>Hello World!</Text>)
  .addWithJSX("large and primary example", () => (
    <Text primary large>
      Hello World!
    </Text>
  ));
