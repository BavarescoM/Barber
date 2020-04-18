import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthLayout from "../pages/_layouts/auth";
import defaultLayout from "../pages/_layouts/default";
import DefaultLayout from "../pages/_layouts/default";
export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
