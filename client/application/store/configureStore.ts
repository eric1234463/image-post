import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { ConfigureOptions } from "../../interfaces/state";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const configureStore = ({ context }: ConfigureOptions) => {
  const sagaMiddleware = createSagaMiddleware({
    context,
  });

  let reduxDevTools;

  if (
    process.env.NODE_ENV !== "production" ||
    (window as any).angular.element(document.body).injector().get("mainConfig")
      .env === "staging"
  ) {
    reduxDevTools =
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__();
  }

  const store = reduxDevTools
    ? createStore(
        rootReducer,
        {},
        compose(applyMiddleware(sagaMiddleware), reduxDevTools)
      )
    : createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
