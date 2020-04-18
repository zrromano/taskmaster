import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import auth from "../services/auth.service";
class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    let state = this.state;
    if (auth.login(state.data.username, state.data.password))
      window.location = "/";
    else {
      state.errors = { username: "Invalid username or password" };
      this.setState(state);
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("username", "Username", "text", null, 6)}
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
