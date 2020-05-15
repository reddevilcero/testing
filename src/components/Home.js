import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Redirect } from "react-router";
import HomeClient from "./HomeClient";
import HomeServiceProvider from "./HomeServiceProvider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userTypeId: 0, userId: 0, token: "" };
  }
  checkSignInStatus() {
    let userSignedIn = JSON.parse(localStorage.getItem("user"));
    return userSignedIn;
  }

  componentDidMount() {
    let user = this.checkSignInStatus();
    if (user === null) return <Redirect to="/" />;
    this.setState({
      userTypeId: user.user.UserTypeId,
      userId: user.user.Id,
      token: user.accessToken,
    });
  }

  render() {
    return (
      <div className="home-container">
        <div className="header big">
          <div className="nav">
            <Link to="/profile">
              <img
                src="../img/icons/profile.png"
                alt="profile"
                className="icon"
              />
            </Link>
            <Link to="#">
              <img src="../img/icons/bell.png" alt="bell" className="icon" />
            </Link>
            <Link to="#">
              <img src="../img/icons/door.png" alt="door" className="icon" />
            </Link>
          </div>
          <img src="../img/logo.png" alt="logo" className="logo logo-big" />
        </div>
        <div className="page-content">
          {this.state.userTypeId === 1 ? (
            <HomeClient />
          ) : (
            <HomeServiceProvider />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
