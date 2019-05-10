import * as React from "react";
import FootBallCard from "../../components/footBallCards/footballPlayerCards";
import PlayersSelect from "../../components/selectPlayers/selectPlayers";

export interface IProps {}

export interface IState {}

class footballPlayersContainer extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <React.Fragment>
        <PlayersSelect />
      </React.Fragment>
    );
  }
}

export default footballPlayersContainer;
