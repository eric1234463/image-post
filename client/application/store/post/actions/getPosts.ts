import { IPost } from "../../../../interfaces/api/post";

const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCEEDED = "GET_POSTS_SUCCEEDED";
const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export interface GetPostRequestAction {
  type: typeof GET_POSTS_REQUEST;
}

export interface GetPostSucceededAction {
  type: typeof GET_POSTS_SUCCEEDED;
  payload: IPost[];
}

export interface GetPostFailedAction {
  type: typeof GET_POSTS_FAILED;
  payload: string;
}

type GetPostActionTypes =
  | GetPostRequestAction
  | GetPostSucceededAction
  | GetPostFailedAction;

export default GetPostActionTypes;
