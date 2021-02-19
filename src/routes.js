import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";

import Overview from "./pages/overview";

// const isLogin = () => {
//   const api = new Api();

//   console.log(api.isAuthenticated());
//   return api.isAuthenticated();
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isLogin() ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/" component={Overview} />
      <Route exact path="/login" component={Login} />

      <Route path="/main" component={Main} />

      {/* <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/temp" component={Temp} /> */}
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      {/* <Route exact path="/code" component={AppViews.Code} />
    <Route exact path="/contact" component={AppViews.Contact} />
    <Route exact path="/presence" component={AppViews.Presence} /> */}
    </div>
  );
};

export default Routes;
