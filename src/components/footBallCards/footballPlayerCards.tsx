import * as React from "react";
import { IPlayers } from "../../reducers/football/footballlReducer";
import styles from "./footballPlayerCards.module.scss";

export interface IProps {
  player: IPlayers;
}

export interface IState {}

class FootBallCard extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <article className={styles.footballCards}>
        <h2>{this.props.player.name}</h2>
        <h3>{this.props.player.position}</h3>
        <section>
          <p>Date Of Birth: {this.props.player.dateOfBirth}</p>
          Country Of Birth: {this.props.player.countryOfBirth}
          Nationality: {this.props.player.nationality}{" "}
        </section>
      </article>
    );
  }
}

export default FootBallCard;
