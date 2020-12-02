import { spawn } from '../../effects';
import takeCreatePost from './createPost';

export default function* postSagas() {
  yield spawn(takeCreatePost);
}
