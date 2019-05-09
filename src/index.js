import React from "react";
import ReactDOM from "react-dom";

// import "./index.scss";

import { createStore } from "redux";
import rootReducer from "./store/ducks";
import { Provider } from "react-redux";

import App from "./App";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
