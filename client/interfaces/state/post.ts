import { IPost } from "../api/post";

export interface IPostState {
  items: IPost[];
  isLoading: boolean;
}
