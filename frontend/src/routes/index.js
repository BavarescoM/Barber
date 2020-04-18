import React from "react";
import { Switch, Router } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* 404
      <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
