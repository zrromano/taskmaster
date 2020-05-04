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
import TaskSet from "./components/taskset";
import UserSettings from "./components/userSettings";
import Calender from "./components/calender";
import CreateList from "./components/createList";
import auth from "./services/auth.service";

library.add(fas);

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setStyles(user);
    this.setState({ user });
  }

  setStyles = (user) => {
    let root = document.documentElement;
    let themes = {
      default: {
        primaryText: "black",
        secondaryText: "darkgray",
        primaryColor: "white",
        secondaryColor: "indianred",
        accentColor: "firebrick",
      },
      dark: {
        primaryText: "darkgray",
        secondaryText: "lightgray",
        primaryColor: "#404040",
        secondaryColor: "#505050",
        accentColor: "black",
      },
    };
    let theme = user ? themes[user.theme] : themes["default"];

    root.style.setProperty("--text-primary", theme.primaryText);
    root.style.setProperty("--text-secondary", theme.secondaryText);
    root.style.setProperty("--color-primary", theme.primaryColor);
    root.style.setProperty("--color-secondary", theme.secondaryColor);
    root.style.setProperty("--color-accent", theme.accentColor);
  };

  render() {
    const links = [
      { path: "/tasks", text: "Tasks", icon: "book" },
      { path: "/calender", text: "Calendar", icon: "calendar" },
    ];
    return (
      <div className="App">
        <NavBar className="nav-icon" links={links} user={this.state.user} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/tasks"
              exact
              component={() => <TaskSet user={this.state.user} />}
            />
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
