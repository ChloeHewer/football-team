import * as React from "react";
import footBallPlayers from "../../data/footballPlayers";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { setPlayers, IPlayers } from "../../reducers/football/footballlReducer";
import FootBallCard from "../footBallCards/footballPlayerCards";
import styles from "./select.module.scss";

export interface IOwnProps {}

export interface IStateProps {
  setPlayers: (players: IPlayers[]) => void;
  player: IPlayers[];
}

export interface IState {}

class PlayerSelect extends React.Component<IOwnProps & IStateProps, IState> {
  public render() {
    return (
      <section className={styles.footballSection}>
        {footBallPlayers.map((player, index) => (
          <FootBallCard player={player} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    player: state.football.player
  };
};

const mapDispatchToProps = { setPlayers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelect);
