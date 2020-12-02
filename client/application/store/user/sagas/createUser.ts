import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { CreateUserRequestAction } from "../actions/createUser";
import { IUser } from "../../../../interfaces/api/user";

export function* createUserApi(payload: CreateUserRequestAction['payload']) {
  const api: Api = yield getContext("api");
  return yield call(api.post, `users`, { user: payload });
}

export function* createUser(action: CreateUserRequestAction) {
  try {
    const result: Response<IUser> = yield call(
      createUserApi,
      action.payload
    );

    yield put({
      type: 'CREATE_USER_SUCCEEDED',
      payload: result.data
    });

    location.reload();
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }

    yield put({
      type: 'CREATE_USER_FAILED',
      payload: e.message,
    });
  }
}

export default function* takeCreateUser() {
  yield takeLatest('CREATE_USER_REQUEST', createUser);
}
