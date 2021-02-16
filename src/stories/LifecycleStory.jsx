import React from "react";
import { storiesOf } from "@storybook/react";
import { PageWithLoadData, PageWithLoadDataAndLoading } from "../05/lifecycle";

storiesOf("Lifecycle", module)
  .addWithJSX("loadData example", () => (
    <PageWithLoadData loadData={() => fetch("/").then(() => "Hello")} />
  ))
  .addWithJSX("Loading Message example", () => (
    <PageWithLoadDataAndLoading loadData={() => fetch("/").then(() => "hello")} />
  ));
