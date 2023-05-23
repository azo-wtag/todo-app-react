import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { asyncFunctionMiddleware } from "store/middleware";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "store/index";

const renderConnected = (
  ui,
  {
    store = createStore(rootReducer, applyMiddleware(asyncFunctionMiddleware)),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
