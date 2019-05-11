import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import footballPlayersContainer from "../src/containers/football/footballContainer";
import Question from "../src/containers/question/question";
import Weather from "../src/containers/weather/weather";

export interface IProps {}

export interface IState {}

class Routes extends React.Component<IProps, IState> {
  public render() {
    return (
      <Switch>
        <Route
          path="/(football| )"
          exact={true}
          component={footballPlayersContainer}
        />
        <Route path="/question" component={Question} />
        <Route path="/weather" component={Weather} />
        <Redirect to="/weather" />
      </Switch>
    );
  }
}

export default Routes;
