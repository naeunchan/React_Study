import React from "react";

export default function (loadingMessage = "Loading...") {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponent = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) {
        return loadingMessage;
      }

      return <WrappedComponent {...otherProps} />;
    }

    WithLoading.displayName = `withLoading(${wrappedComponent})`;
    return WithLoading;
  };
}
