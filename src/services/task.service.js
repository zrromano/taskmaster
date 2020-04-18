import http from "./http.service";
import { tasksets } from "./samples/task.sample.json";
import _ from "lodash";
const fs = require("fs");

//const apiEndpoint = process.env.REACT_APP_APIURL + "/tasks";

export function createTask(task, user) {}

export function getTasks(user) {
  return tasksets.find((o) => o.user === user.username).collection;
}

export function updateTask(user, task, newTask, tasklist = "") {}

export default {
  createTask,
  getTasks,
  updateTask,
};
