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
import NavBar from "../src/containers/navBar/navBar";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <header className="App-header">
              <h2>Tech Test</h2>
            </header>
            <NavBar />
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
