import React from "react";
import task from "../services/task.service";

const TaskSet = ({ user }) => {
  let tasks = null;
  if (user) {
    tasks = task.getTasks(user);
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let getNextDueDate = (due) => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    date = 30; //date.getDate();

    if (due.once) {
      due = due.once;
      return due.day + " " + months[due.month] + " " + due.year;
    }

    if (due.weekly) {
      due = due.weekly;
      if (due[due.length - 1] < day || due[0] < day) return days[due[0]];
      else {
        let index = 0;
        while (due[index + 1] >= day) index++;
        if (due[index] === day) return "Today";
        else return days[due[index]];
      }
    }

    if (due.monthly) {
      due = due.monthly;
      return dueMonthly(due, date, day, month, year);
    }

    if (due.yearly) {
    }
  };

  let dueMonthly = (due, date, day, month, year) => {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    if (due === date) {
      return "Today";
    } else if (due > date) {
      if (due > daysInMonth) due = daysInMonth;
      if (date - due < 7) {
        return days[(day + (date - due)) % 7];
      } else {
        return months[month] + " " + due;
      }
    } else {
      if (due + (daysInMonth - date) < 7)
        return days[(day + (due + (daysInMonth - date))) % 7];

      month++;
      daysInMonth = new Date(year, month + 1, 0).getDate();
      if (due > daysInMonth) due = daysInMonth;
      return months[month] + " " + due;
    }
  };

  return (
    <div className="container">
      {tasks ? (
        tasks.map((task) => (
          <div>
            {task.name ? (
              <div className="tasklist">
                <h3>{task.name}</h3>
                <hr />
                {task.tasks.map((task) => (
                  <div className="task">
                    <h4>{task.task}</h4>
                    <p>Due: {getNextDueDate(task.due)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="singletonTask">
                <h4>{task.task}</h4>
                <p>Due: {getNextDueDate(task.due)}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Please login to view tasks.</p>
      )}
    </div>
  );
};

export default TaskSet;
