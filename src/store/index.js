import { combineReducers } from "redux";
import { filterReducer } from "./reducers/filter";
import { todoReducer } from "./reducers/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
