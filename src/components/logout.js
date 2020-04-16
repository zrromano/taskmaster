import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  //logout user then redirect to home
  return <Redirect to="/" />;
};

export default Logout;
