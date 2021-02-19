import React, { PureComponent } from "react";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";
import LoadingProvider from "./LoadingProvider";
import Button from "../04/Button";

function RowBComponent() {
  return <Button>Button</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext label="Button" />;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="Change state" />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
