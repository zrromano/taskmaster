import React, { Component } from "react";
import NavBar from "./components/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import NotFound from "./components/notfound";
import TaskList from "./components/tasklist";
import Tasks from "./components/tasks";
import UserSettings from "./components/userSettings";
import Calender from "./components/calender";
import CreateList from "./components/createList";

library.add(fas);

class App extends Component {
  render() {
    const links = [
      { path: "/tasks", text: "Tasks", icon: "book" },
      { path: "/calender", text: "Calendar", icon: "calendar" },
    ];
    return (
      <div className="App">
        <NavBar className="nav-icon" links={links} user={null} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tasks" exact component={Tasks} />
            <Route path="/tasks/:listname" component={TaskList} />
            <Route path="/settings" component={UserSettings} />
            <Route path="/calender" component={Calender} />
            <Route path="/create" component={CreateList} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
