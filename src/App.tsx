import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FootBallPlayersContainer from "../src/containers/football/footballContainer";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./store";
import history from "./history";
import { NavLink } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <header className="App-header">
              <ul>
                <NavLink to={"/football"}>
                  <li>FootBall</li>
                </NavLink>
                <NavLink to={"/question"}>
                  <li>Question</li>
                </NavLink>
                <NavLink to={"/weather"}>
                  <li>Weather</li>
                </NavLink>
              </ul>
            </header>
            <main>
              <Routes />
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
