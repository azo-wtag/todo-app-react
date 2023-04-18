import React from "react";
import { render } from "@testing-library/react";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "store/index";
// Replace this with the appropriate imports for your project

const renderConnected = (
  ui,
  {
    store = createStore(rootReducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
