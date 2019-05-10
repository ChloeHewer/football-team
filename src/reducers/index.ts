import { combineReducers } from "redux";
import footballReducer, { IFootballState } from "./football/footballlReducer";
import weatherReducer, { IWeatherState } from "./weather/weatherReducer";

export interface IStore {
  football: IFootballState;
  weather: IWeatherState;
}

export default combineReducers({
  football: footballReducer,
  weather: weatherReducer
});
