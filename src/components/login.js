import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {};

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("email", "Email", "email", null, 6)}
          {this.renderInput("password", "Password", "password", null, 6)}
          {this.renderButton("Login")}
          <Link to="/register" className="form-link">
            <small>Don't have an account? Register here.</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
