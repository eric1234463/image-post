import { Reducer } from "redux";

import { State } from "../../../../interfaces/state";
import PostActionTypes from "../actions";

export const initialState: State["post"] = {
  items: [],
  isLoading: false,
};

const post: Reducer<State["post"], PostActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'CREATE_POST_REQUEST':
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'CREATE_POST_SUCCEEDED':
    case 'CREATE_POST_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_POSTS_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      }
    default:
      return state;
  }
};

export default post;
