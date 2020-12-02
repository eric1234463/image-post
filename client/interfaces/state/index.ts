import { Api } from '../api';
import { IPostState } from './post';
import { IUserState } from './user';

export interface State {
  readonly user: IUserState;
  readonly post: IPostState;
}

export interface ConfigureOptions {
  context: StoreContext;
}

export interface StoreContext {
  api: Api;
}
