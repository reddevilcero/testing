import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "../SignIn";
import Register from "../Register";
import ForgottenPassword from "../ForgottenPassword";

class LogInLayout extends React.Component {
  render() {
    return (
      <div className="signin-container">
        <div className="white-container">
          <div className="space-between-fields">
            <img src="../img/logo.png" alt="logo" />
          </div>
          <div className="space-between-fields">
            <span>It's better because it's Simpler</span>
          </div>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={SignIn} />
              <Route exact path={"/register"} component={Register} />
              <Route
                exact
                path={"/forgottenpassword"}
                component={ForgottenPassword}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default LogInLayout;
