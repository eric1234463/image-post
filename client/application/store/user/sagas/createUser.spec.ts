import { put, takeLatest, call, getContext } from "../../effects";
import takeCreateUser, { createUserApi, createUser } from "./createUser";

describe("[App Sagas/getApp]", () => {
  const api = {
    post: jest.fn()
  };

  const action = {
    payload: {
      email: 'eric1234463@gmail.com',
      password: '12345678'
    }
  }

  const result = {
    data: {
      email: action.payload.email
    }
  }

  const error = {
    message: 'Error'
  }
  it("should call createUserApi with action payload", () => {
    const gen = createUserApi(action.payload);

    expect(gen.next().value).toEqual(getContext('api'));
    expect(gen.next(api).value).toEqual(call(api.post, `users`, { user: action.payload }));

    expect(gen.next().done);
  });

  it("should call createUser with CREATE_USER_SUCCEEDED", () => {
    const generator = createUser(action);

    expect(generator.next().value).toEqual(call(createUserApi, action.payload));
    expect(generator.next(result).value).toEqual(
      put({
        type: 'CREATE_USER_SUCCEEDED',
        payload: result.data,
      })
    );

    expect(generator.next().done);
  });

  it("should call createUser with CREATE_USER_FAILED", () => {
    const generator = createUser(action);

    expect(generator.next().value).toEqual(call(createUserApi, action.payload));
    expect(generator.throw(error).value).toEqual(
      put({
        type: 'CREATE_USER_FAILED',
        payload: error.message
      })
    );

    expect(generator.next().done);
  });

  it("should call takeCreateUser with CREATE_USER_REQUEST", () => {
    const generator = takeCreateUser();

    expect(generator.next().value).toEqual(
      takeLatest('CREATE_USER_REQUEST', createUser)
    );
    expect(generator.next().done);
  });
});
