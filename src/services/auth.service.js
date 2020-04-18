//import http from "./http.service";
//import jwtDecode from "jwt-decode";
import { users } from "./samples/user.sample.json";

//const apiEndpoint = process.env.REACT_APP_APIURL + "/auth";
const tokenKey = "token"; //process.env.REACT_APP_TOKENKEY;

//http.setJwt(getJwt());

export function login(username, password) {
  let jwt = JSON.stringify(
    users.find((o) => o.username === username && o.password === password)
  );
  console.log(jwt);
  if (jwt) {
    localStorage.setItem(tokenKey, jwt);
    return true;
  }

  return false;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  return localStorage.getItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
