import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  };

  doSubmit = () => {};

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("username", "Username", "text", null, 6)}
          {this.renderInput("email", "Email", "email", null, 6)}
          {this.renderInput("password", "Password", "text", null, 6)}
          {this.renderButton("Create Account")}
          <Link to="/login" className="form-link">
            <small>Already have an account? Login here.</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
