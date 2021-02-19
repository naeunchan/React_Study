import React, { PureComponent } from "react";
import {
  ButtonWithDefaultLoadingContext,
  ButtonWithLoading2Context,
} from "./ButtonWithLoadingContextAndKey";
import LoadingProviderWithKey from "./LoadingProviderWithKey";
import ButtonWithConsumer from "./ButtonWithConsumer";

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey("loading2");

function TableComponent() {
  return (
    <table>
      <ButtonWithDefaultLoadingContext>Context1</ButtonWithDefaultLoadingContext>
      <ButtonWithLoading2Context>Context2</ButtonWithLoading2Context>
      <ButtonWithConsumer>Multi Consumer example</ButtonWithConsumer>
    </table>
  );
}

export default class HomePageWithTwoProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider1>
        <LoadingProvider2>
          <TableComponent />
        </LoadingProvider2>
      </LoadingProvider1>
    );
  }
}
