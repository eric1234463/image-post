import { Api } from '../api';
import { IUserState } from './user';

export interface State {
  readonly user: IUserState
}

export interface ConfigureOptions {
  context: StoreContext;
}

export interface StoreContext {
  api: Api;
}
