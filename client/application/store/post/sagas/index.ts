import { spawn } from '../../effects';
import takeCreatePost from './createPost';
import takeGetPosts from './getPosts';

export default function* postSagas() {
  yield spawn(takeCreatePost);
  yield spawn(takeGetPosts);
}
