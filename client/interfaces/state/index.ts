import { Api } from '../api';

export interface State {

}

export interface ConfigureOptions {
  context: StoreContext;
}

export interface StoreContext {
  api: Api;
}
