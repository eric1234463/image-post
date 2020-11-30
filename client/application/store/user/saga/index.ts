import { spawn } from '../../effects';
import takeCreateUser from './createUser';

export default function* userSagas() {
  spawn(takeCreateUser);
}
