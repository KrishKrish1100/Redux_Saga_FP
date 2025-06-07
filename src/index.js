import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import bookNowReducer from "./Reducer/reducer";
import { watchBooking, watchUpdateGame, watchPostTodayTime } from "./sagas/index";
const sagaMiddlewhere = createSagaMiddleware();
const store = createStore(bookNowReducer, applyMiddleware(sagaMiddlewhere));

sagaMiddlewhere.run(watchBooking);
sagaMiddlewhere.run(watchUpdateGame);
sagaMiddlewhere.run(watchPostTodayTime);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();