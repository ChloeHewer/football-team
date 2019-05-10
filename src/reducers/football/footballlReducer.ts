import { ThunkAction } from "redux-thunk";

// IFootball interface
export interface IPlayers {
  id: number;
  name: string;
  position: string | null;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
}

// action types
export const SET_PLAYER = "SET_PLAYER";

// action creators
export const setPlayers = (player: IPlayers[]): ISetPlayer => ({
  type: SET_PLAYER,
  player
});

type ThunkResult<R> = ThunkAction<R, IFootballState, null, IFootballActions>;

// action interfaces
export interface ISetPlayer {
  type: typeof SET_PLAYER;
  player: IPlayers[];
}

// combining action creators
type IFootballActions = ISetPlayer;

export interface IFootballState {
  player: IPlayers[];
}

// reducer with initial state
const initialState: IFootballState = {
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

const footballReducer = (state = initialState, action: IFootballActions) => {
  switch (action.type) {
    case SET_PLAYER:
      return { ...state, player: action.player };
    default:
      return state;
  }
};

export default footballReducer;
