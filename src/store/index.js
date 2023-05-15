import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlce";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: { todo: todoReducer, filter: filterReducer },
});

export default store;
