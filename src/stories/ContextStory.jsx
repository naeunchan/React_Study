import React from "react";
import { storiesOf } from "@storybook/react";

import HomePageComponent from "../06/HomePageComponent";
import HomePageWithProvider from "../06/HomePageWithProvider";
import HomePageWithTwoProvider from "../06/HomePageWithTwoProvider";

storiesOf("HomePageComponent", module)
  .addWithJSX("Context example", () => <HomePageComponent />)
  .addWithJSX("Provider example", () => <HomePageWithProvider />)
  .addWithJSX("Double Provider example", () => <HomePageWithTwoProvider />);
