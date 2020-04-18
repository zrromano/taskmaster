import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/auth.service";

const Logout = () => {
  auth.logout();
  window.location = "/";

  return null;
};

export default Logout;
