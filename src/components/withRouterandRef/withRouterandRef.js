import React from "react";
import { withRouter } from "react-router";

export const withRouterAndRef = (Wrapped) => {
  const WithRouter = withRouter(({ forwardRef, ...props }) => (
    <Wrapped ref={forwardRef} {...props} />
  ));

  const WithRouterRef = React.forwardRef((props, ref) => (
    <WithRouter forwardRef={ref} {...props} />
  ));
  const name = Wrapped.displayName || Wrapped.name;
  WithRouterRef.displayName = `withRouterAndRef(${name})`;
  return WithRouterRef;
};
