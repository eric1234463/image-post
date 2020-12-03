import { IPost, IPostForm } from "../../../../interfaces/api/post";

const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
const CREATE_POST_SUCCEEDED = "CREATE_POST_SUCCEEDED";
const CREATE_POST_FAILED = "CREATE_POST_FAILED";

export interface CreatePostRequestAction {
  type: typeof CREATE_POST_REQUEST;
  payload: IPostForm
}

export interface CreatePostSucceededAction {
  type: typeof CREATE_POST_SUCCEEDED;
  payload: IPost;
}

export interface CreatePostFailedAction {
  type: typeof CREATE_POST_FAILED;
  payload: string;
}

type CreatePostActionTypes =
  | CreatePostRequestAction
  | CreatePostSucceededAction
  | CreatePostFailedAction;

export default CreatePostActionTypes;
