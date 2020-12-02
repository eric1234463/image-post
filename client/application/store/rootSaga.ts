import { spawn } from './effects';
import userSagas from './user/saga';

export function* rootSaga() {
  yield spawn(userSagas);
}
