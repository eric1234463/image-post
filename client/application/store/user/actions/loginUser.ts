import { IUser } from "../../../../interfaces/api/user";

const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
const LOGIN_USER_SUCCEEDED = "LOGIN_USER_SUCCEEDED";
const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export interface LoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
  payload: IUser
}

export interface LoginUserSucceededAction {
  type: typeof LOGIN_USER_SUCCEEDED;
  payload: IUser;
}

export interface LoginUserFailedAction {
  type: typeof LOGIN_USER_FAILED;
  payload: string;
}

type LoginUserActionTypes =
  | LoginUserRequestAction
  | LoginUserSucceededAction
  | LoginUserFailedAction;

export default LoginUserActionTypes;
