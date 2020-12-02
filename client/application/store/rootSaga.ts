import { spawn } from './effects';
import userSagas from './user/sagas';
import postSagas from './post/sagas';

export function* rootSaga() {
  yield spawn(userSagas);
  yield spawn(postSagas);
}
