import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import reportWebVitals from "reportWebVitals";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import rootReducer from "store";
import { Provider } from "react-redux";
import { asyncFunctionMiddleware } from "store/middleware";

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const myStore = createStore(
  rootReducer,
  compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
