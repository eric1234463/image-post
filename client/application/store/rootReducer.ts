import { combineReducers } from 'redux';
import { State } from '../../interfaces/state';
import user from '../store/user/reducers';

const rootReducer = combineReducers<State>({
  user,
})

export default rootReducer;
