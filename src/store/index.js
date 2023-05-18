import { combineReducers } from "redux";
import { filterReducer } from "store/reducers/filter";
import { todoReducer } from "store/reducers/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
