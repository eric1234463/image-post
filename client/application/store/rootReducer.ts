import { combineReducers } from 'redux';
import { State } from '../../interfaces/state';
import user from '../store/user/reducers';
import post from '../store/post/reducers';

const rootReducer = combineReducers<State>({
  user,
  post,
})

export default rootReducer;
