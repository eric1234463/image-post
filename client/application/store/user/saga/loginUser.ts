import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { CreateUserRequestAction } from "../actions/createUser";
import { IUser } from "../../../../interfaces/api/user";

export function* loginUserApi(payload: CreateUserRequestAction['payload']) {
  const api: Api = yield getContext("api");
  return yield call(api.post, `users/sign_in`, { payload });
}

export function* loginUser(action: CreateUserRequestAction) {
  try {
    const result: Response<IUser> = yield call(
      loginUserApi,
      action.payload
    );

    yield put({
      type: 'LOGIN_USER_SUCCEEDED',
      payload: result.data
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }

    yield put({
      type: 'LOGIN_USER_FAILED',
      payload: e.message,
    });
  }
}

export default function* takeLoginUser() {
  yield takeLatest('LOGIN_USER_REQUEST', loginUser);
}
