import http from "./http.service";
import { users } from "./samples/user.sample.json";
const fs = require("fs");

//const apiEndpoint = process.env.REACT_APP_APIURL + "/users";

export function register(user) {}

export function update(user, newUser) {}

export default {
  register,
  update,
};
