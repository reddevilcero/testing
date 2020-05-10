import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogInLayout from "./components/shared/LogInLayout";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LogInLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
