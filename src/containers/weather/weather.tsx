import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchWeather, IWeather } from "../../reducers/weather/weatherReducer";
import WeatherComponent from "../../components/weather/weatherComponents";
import styles from "./weatherContainer.module.scss";

export interface IOwnProps {}

export interface IStateProps {
  weather: IWeather[];
  fetchWeather: () => void;
}

export interface IState {}

class Weather extends React.Component<IOwnProps & IStateProps, IState> {
  // state = { :  }

  public componentDidMount() {
    this.props.fetchWeather();
  }

  public render() {
    return (
      <section className={styles.weather}>
        {this.props.weather.map((weather, index) => (
          <WeatherComponent weather={weather} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    weather: state.weather.weather
  };
};

const mapDispatchToProps = { fetchWeather };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
