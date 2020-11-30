import { IUser } from "../../../../interfaces/api/user";

const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED";
const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export interface CreateUserRequestAction {
  type: typeof CREATE_USER_REQUEST;
  payload: IUser
}

export interface CreateUserSucceededAction {
  type: typeof CREATE_USER_SUCCEEDED;
  payload: IUser;
}

export interface CreateUserFailedAction {
  type: typeof CREATE_USER_FAILED;
  payload: string;
}

type CreateUserActionTypes =
  | CreateUserRequestAction
  | CreateUserSucceededAction
  | CreateUserFailedAction;

export default CreateUserActionTypes;
