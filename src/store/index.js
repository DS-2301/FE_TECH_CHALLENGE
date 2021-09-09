import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import cart from "./cart";
import products from "./products";

const appReducer = combineReducers({
  cart,
  products,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      : (f) => f
  )
);
