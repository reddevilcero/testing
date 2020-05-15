import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = { email: "", password: "", error: "" };
  }

  checkSignInStatus() {
    let userSignedIn = JSON.parse(localStorage.getItem("user"));
    return userSignedIn;
  }

  componentDidMount() {
    let user = this.checkSignInStatus();
    if (user !== null) this.props.history.push("/home");
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.props.history.push("/home");
        }
      })
      .catch((error) => {
        this.setState({ error: "Invalid email or passowrd" });
      });
    e.preventDefault();
  };

  render() {
    return (
      <div className="signin-container">
        <div className="white-container">
          <div className="space-between-fields">
            <img src="../img/logo.png" alt="logo" className="logo" />
          </div>
          <div className="space-between-fields">
            <span>It's better because it's Simpler</span>
          </div>
          <div className="space-between-fields">
            <span className="text-bold">Sign In</span>
          </div>
          <div className="space-between-fields">
            <div className="input-field icon icon-envelope">
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.onInputChange}
                value={this.state.email}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field icon icon-lock space-between-fields">
              <input
                type="text"
                id="password"
                name="password"
                onChange={this.onInputChange}
                value={this.state.password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="btn btn-sep btn-full-width icon-key space-between-fields"
              onClick={this.handleClick}
            >
              Sign In
            </button>
            <span className="error">{this.state.error}</span>
          </div>
          <div className="footer space-between-fields space-between-fields-last">
            <Link to="/register">Register</Link>
            {" | "}
            <Link to="/forgottenpassword">Forgotten Password</Link>
            {" | "}
            <Link to="/aboutus">About Us</Link>
            {" | "}
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
