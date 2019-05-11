import * as React from "react";
import { IPlayers } from "../../reducers/football/footballlReducer";
import styles from "./footballPlayerCards.module.scss";

export interface IProps {
  player: IPlayers;
}

export interface IState {
  player: IPlayers;
}

class FootBallCard extends React.Component<IProps, IState> {
  public state = {
    player: {
      id: 0,
      name: "",
      position: "",
      dateOfBirth: "",
      countryOfBirth: "",
      nationality: "",
      role: ""
    }
  };
  public render() {
    return (
      <React.Fragment>
        <article className={styles.footballCards}>
          <h2>{this.props.player.name}</h2>
          <h3>{this.props.player.position}</h3>
          <section>
            <p>Date Of Birth: {this.props.player.dateOfBirth}</p>
            <div>Country Of Birth: {this.props.player.countryOfBirth}</div>
            <div>Nationality: {this.props.player.nationality}</div>
          </section>
        </article>
        {/* <div>{this.state.player.name}</div> */}
      </React.Fragment>
    );
  }

  // private pickPlayers = () => {
  //   this.setState({ player: this.props.player });
  // };
}

export default FootBallCard;
