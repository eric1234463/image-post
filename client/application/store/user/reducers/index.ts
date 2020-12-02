import { Reducer } from "redux";

import { State } from "../../../../interfaces/state";
import UserActionTypes from "../actions";

export const initialState: State["user"] = {
  email: "",
  isLoading: false,
};

const apps: Reducer<State["user"], UserActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "CREATE_USER_REQUEST":
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "CREATE_USER_FAILED":
    case "LOGIN_USER_FAILED":
      return {
        ...state,
        isLoading: false,
      };

    case "CREATE_USER_SUCCEEDED":
    case "LOGIN_USER_SUCCEEDED":
      return {
        ...state,
        email: action.payload.email,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default apps;
