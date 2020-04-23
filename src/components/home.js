import React from "react";
import "../home.css";
import NavBar from "./navbar";

const Home = () => {
  const siteName = "Taskmaster";
  return (
    <div className="container">
      <h1 className="header">Welcome to {siteName}!</h1>
      <p className="text">
        {siteName} a simple and easy to use productivity solution for keeping
        track of everything you need to get done!
      </p>
      <h2 className="header">Getting Started</h2>
      <p className="text">
        <b>1. Create an account</b> Click Login (the person) on the NavBar and
        follow the registration link below the form.
        <br />
        <br />
        <b>2. Make a few tasks</b> Click Tasks (the book) on the NavBar, then
        click "Create Tasks". You can create standalone tasks or lists of
        related tasks. You can set a one-time due date for your tasks, or make
        them repeat daily, weekly, or monthly. <br /> <br />
        <b>3. Check out the calender view</b> Once you have a few tasks, click
        Calender on the NavBar. Here you can see when each of your tasks is due
        on a monthly calender. <br />
        <br />
        <b>4. Try changing your theme</b> Taskmaster supports multiple color
        schemes, to change yours just go to User Settings and pick the one you
        like best!
      </p>
      <h2 className="header">About the Site</h2>
      <p className="text">
        {siteName} is a class project developed by Zach Romano and Matt
        Frankmore.
        <br /> <br />
        Our tech stack is:
        <br />
        <b>Front end</b> React, CSS3
        <br />
        <b>Back end</b> Django, MongoDB or PostgreSQL (tbd)
      </p>
    </div>
  );
};

export default Home;
