import React from "react";
import { withRouter } from "react-router-dom";

class HomeServiceProvider extends React.Component {
  render() {
    return <span>Home service provider</span>;
  }
}

export default withRouter(HomeServiceProvider);
