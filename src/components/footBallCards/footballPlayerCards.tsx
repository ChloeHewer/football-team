import * as React from "react";
import { IPlayers } from "../../reducers/football/footballlReducer";
import styles from "./footballPlayerCards.module.scss";

export interface IProps {
  player: IPlayers;
}

export interface IState {
  player: IPlayers[];
}

class FootBallCard extends React.Component<IProps, IState> {
  public state = {
    player: [
      {
        id: 0,
        name: "",
        position: "",
        dateOfBirth: "",
        countryOfBirth: "",
        nationality: "",
        role: ""
      }
    ]
  };

  public render() {
    return (
      <React.Fragment>
        <article onClick={this.pickPlayers} className={styles.footballCards}>
          <h2>{this.props.player.name}</h2>
          <h3>{this.props.player.position}</h3>
          <section>
            <p>Date Of Birth: {this.props.player.dateOfBirth}</p>
            <div>Country Of Birth: {this.props.player.countryOfBirth}</div>
            <div>Nationality: {this.props.player.nationality}</div>
          </section>
        </article>
      </React.Fragment>
    );
  }

  private pickPlayers = () => {
    var player = this.state.player.push(this.props.player);
    console.log(this.state.player);
  };
}

export default FootBallCard;
