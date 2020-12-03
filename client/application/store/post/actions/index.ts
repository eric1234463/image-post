import CreatePostActionTypes from './createPost';
import GetPostActionTypes from './getPosts';

type PostActionTypes = CreatePostActionTypes | GetPostActionTypes;

export default PostActionTypes;
