import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

export interface IProps {}

export interface IState {}

class NavBar extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <ul className={styles.navBar}>
        <div>
          <NavLink to={"/football"}>
            <li>FootBall</li>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/question"}>
            <li>Question</li>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/weather"}>
            <li>Weather</li>
          </NavLink>
        </div>
      </ul>
    );
  }
}

export default NavBar;
