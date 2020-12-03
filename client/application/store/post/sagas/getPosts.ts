import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { IGetPostResponse } from "../../../../interfaces/api/post";

export function* getPostsApi() {
  const api: Api = yield getContext("api");

  return yield call(api.get, `posts/me`)
}

export function* getPosts() {
  try {
    const result: Response<IGetPostResponse> = yield call(getPostsApi);

    yield put({
      type: 'GET_POSTS_SUCCEEDED',
      payload: result.data.data,
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }

    yield put({
      type: 'GET_POSTS_FAILED',
      payload: e.message,
    });
  }
}

export default function* takeGetPosts() {
  yield takeLatest('GET_POSTS_REQUEST', getPosts);
}
