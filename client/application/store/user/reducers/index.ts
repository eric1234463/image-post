import { Reducer } from "redux";

import { State } from "../../../../interfaces/state";
import UserActionTypes from "../actions";

export const initialState: State["user"] = {
  email: "",
  isLoading: false,
  error: {
    isLoginError: false,
    isEmailExist: false,
  },
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
        error: initialState.error,
      };

    case "LOGIN_USER_FAILED":
      return {
        ...state,
        isLoading: false,
        error: {
          ...state.error,
          isLoginError: true,
        },
      };
    case "CREATE_USER_FAILED":
      return {
        ...state,
        isLoading: false,
        error: {
          ...state.error,
          isEmailExist: true,
        },
      };

    case "CREATE_USER_SUCCEEDED":
    case "LOGIN_USER_SUCCEEDED":
      return {
        ...state,
        email: action.payload.email,
        isLoading: false,
        error: initialState.error,
      };
    default:
      return state;
  }
};

export default apps;
