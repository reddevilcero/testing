import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      firstname: "",
      surname: "",
      email: "",
      password: "",
      usertypeid: "",
      error: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    axios
      .post("http://localhost:4000/api/users", {
        firstname: this.state.firstname,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
        usertypeid: this.state.usertypeid,
      })
      .then((response) => {
        if (response.status === 200) this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="space-between-fields">
          <span className="text-bold">Register</span>
        </div>
        <div className="space-between-fields">
          <div className="input-field">
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              onChange={this.onInputChange}
              value={this.state.firstname}
              autoComplete="false"
            />
            <label htmlFor="firstname">Firstname</label>
          </div>
          <div className="input-field space-between-fields">
            <input
              type="text"
              id="surname"
              name="surname"
              required
              onChange={this.onInputChange}
              value={this.state.surname}
              autoComplete="false"
            />
            <label htmlFor="surname">Surname</label>
          </div>
          <div className="input-field space-between-fields">
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={this.onInputChange}
              value={this.state.email}
              autoComplete="false"
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-field space-between-fields">
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={this.onInputChange}
              value={this.state.password}
              autoComplete="false"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="radio-button-container space-between-fields">
            <label className="radio-button margin-right-15">
              <input
                type="radio"
                name="usertypeid"
                value="1"
                checked={this.state.usertypeid === "1"}
                onChange={this.onInputChange}
              />
              <span className="label-visible">
                <span className="fake-radiobutton"></span>
                Client
              </span>
            </label>

            <label className="radio-button">
              <input
                type="radio"
                name="usertypeid"
                value="2"
                checked={this.state.usertypeid === "2"}
                onChange={this.onInputChange}
              />
              <span className="label-visible">
                <span className="fake-radiobutton"></span>
                Service Provider
              </span>
            </label>
          </div>
          <button
            className="btn btn-sep btn-full-width icon-key space-between-fields"
            onClick={this.handleClick}
          >
            SAVE
          </button>
          <span className="error">{this.state.error}</span>
        </div>
        <div className="footer space-between-fields space-between-fields-last">
          <Link to="/">Sign In</Link>
          {" | "}
          <Link to="/forgottenpassword">Forgotten Password</Link>
          {" | "}
          <Link to="/aboutus">About Us</Link>
          {" | "}
          <Link to="/contactus">Contact Us</Link>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
