import { spawn } from '../../effects';
import takeCreateUser from './createUser';
import takeLoginUser from './loginUser';

export default function* userSagas() {
  yield spawn(takeCreateUser);
  yield spawn(takeLoginUser);
}
