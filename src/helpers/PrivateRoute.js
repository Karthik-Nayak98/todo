import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: RouteComponent,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(restProps) =>
        authenticated === true ? (
          <RouteComponent {...restProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
