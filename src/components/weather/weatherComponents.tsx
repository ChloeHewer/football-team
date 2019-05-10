import * as React from "react";
import { IWeather } from "../../reducers/weather/weatherReducer";
import styles from "./weather.module.scss";

export interface IProps {
  weather: IWeather;
}

export interface IState {}

class WeatherComponent extends React.Component<IProps, IState> {
  public render() {
    let backgroundImage;
    if (this.props.weather.name === "City of London") {
      backgroundImage = styles.london;
    } else if (this.props.weather.name === "City of Bristol") {
      backgroundImage = styles.Bristol;
    } else if (this.props.weather.name === "Rome") {
      backgroundImage = styles.Rome;
    }
    return (
      <article className={`${styles.weatherArticles} ${backgroundImage}`}>
        <section className={styles.info}>
          <h2>{this.props.weather.name}</h2>
          <div>Temperature: {this.props.weather.main.temp} </div>
          <div>Humidity: {this.props.weather.main.humidity}</div>
          <section>
            <div>Min Temp: {this.props.weather.main.temp_min}</div>
            <div>Max Temp: {this.props.weather.main.temp_max}</div>
          </section>
        </section>
      </article>
    );
  }
}

export default WeatherComponent;
