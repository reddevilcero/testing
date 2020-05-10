import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./components/Home";
import "./App.scss";
import SignIn from "./components/SignIn";

class App extends React.Component {
  checkSignInStatus() {
    let userSignedIn = JSON.parse(localStorage.getItem("user"));
    return userSignedIn;
  }

  componentDidMount() {
    let user = this.checkSignInStatus();
    if (user === null) return <Redirect to="/" />;
    else return <Redirect to="/home" />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={SignIn} />
          <Route exact path={"/home"} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
