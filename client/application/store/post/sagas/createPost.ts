import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { CreatePostRequestAction } from "../actions/createPost";
import { IPost } from "../../../../interfaces/api/post";

export function* createUserApi(payload: CreatePostRequestAction["payload"]) {
  const api: Api = yield getContext("api");
  const formData = new FormData();

  if (payload.image.url) {
    formData.append("image", payload.image.url);
  }

  formData.append("description", payload.description);

  return yield call(api.post, `post`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function* createPost(action: CreatePostRequestAction) {
  try {
    const result: Response<IPost[]> = yield call(createUserApi, action.payload);

    yield put({
      type: "CREATE_POST_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }

    yield put({
      type: "CREATE_POST_FAILED",
      payload: e.message,
    });
  }
}

export default function* takeCreatePost() {
  yield takeLatest("CREATE_USER_REQUEST", createPost);
}
