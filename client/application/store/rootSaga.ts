import { spawn } from './effects';
import userSagas from './user/saga';

export function* rootSaga() {
  spawn(userSagas);
}
