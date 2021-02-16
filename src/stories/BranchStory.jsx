import React from "react";
import { storiesOf } from "@storybook/react";
import BranchLoadingButton from "../05/branch";

storiesOf("Branch", module)
  .addWithJSX("basic", () => <BranchLoadingButton>Hello</BranchLoadingButton>)
  .addWithJSX("isLoading example", () => (
    <BranchLoadingButton isLoading>Hello</BranchLoadingButton>
  ));
