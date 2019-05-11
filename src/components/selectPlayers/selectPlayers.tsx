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
      <React.Fragment>
        <section className={styles.choosePlayer}>
          <label>Pick 3 Defenders: </label>
          <section className={styles.footballSection}>
            {footBallPlayers.map((player, index) => {
              if (player.position === "Defender") {
                return <FootBallCard player={player} />;
              }
            })}
          </section>

          <label>Pick 3 Attackers: </label>
          <section className={styles.footballSection}>
            {footBallPlayers.map((player, index) => {
              if (player.position === "Attacker") {
                return <FootBallCard player={player} />;
              }
            })}
          </section>

          <label>Pick 4 Midfielder: </label>
          <section className={styles.footballSection}>
            {footBallPlayers.map((player, index) => {
              if (player.position === "Midfielder") {
                return <FootBallCard player={player} />;
              }
            })}
          </section>

          <label>Pick 1 Goalkeeper: </label>
          <section className={styles.footballSection}>
            {footBallPlayers.map((player, index) => {
              if (player.position === "Goalkeeper") {
                return <FootBallCard player={player} />;
              }
            })}
          </section>
        </section>
      </React.Fragment>
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
