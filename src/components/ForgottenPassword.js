import React from "react";
import { withRouter, Link } from "react-router-dom";

class ForgottenPassword extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = { email: "", password: "" };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <div className="space-between-fields">
          <span className="text-bold">Forgotten Password</span>
        </div>
        <div className="space-between-fields">
          <div className="input-field icon icon-envelope">
            <input type="text" id="email" required />
            <label htmlFor="email">Email Address</label>
          </div>
          <button className="btn btn-sep btn-full-width icon-key space-between-fields">
            RECOVER PASSWORD
          </button>
        </div>
        <div className="footer space-between-fields space-between-fields-last">
          <Link to="/register">Register</Link>
          {" | "}
          <Link to="/">Sign In</Link>
          {" | "}
          <Link to="/aboutus">About Us</Link>
          {" | "}
          <Link to="/contactus">Contact Us</Link>
        </div>
      </>
    );
  }
}

export default withRouter(ForgottenPassword);
