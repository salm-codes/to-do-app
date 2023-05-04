import { legacy_createStore as createStore, combineReducers } from "redux";
import todoReducer from "./todosReducer";
import filterReducer from "./filterReducer";
const rootReducer = combineReducers({
  todosSlice: todoReducer,
  filterSlice: filterReducer,
});
const store = createStore(rootReducer);

export default store;
