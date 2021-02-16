import compose from "recompose/compose";
import withLoading from "./withLoading";
import withState from "recompose/withState";
const withLoadData = withState("isLoading", "setIsLoading", false);

function Component() {
  return "Completed(print component)";
}

const ComponentWithLoading = withLoading("Loading...")(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);
