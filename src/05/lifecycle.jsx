import React from "react";
import lifecycle from "recompose/lifecycle";
import compose from "recompose/compose";
import withLoading from "./withLoading";

function Page({ content }) {
  return (
    <div>
      Page Loding is completed.
      {content}
    </div>
  );
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: "" },
  componentDidMount: function () {
    if (this.props.loadData) {
      this.props.loadData().then((content) => this.setState({ isLoading: false, content }));
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
export const PageWithLoadDataAndLoading = compose(
  withLoadData,
  withLoading("Server Requesting..."),
)(Page);
