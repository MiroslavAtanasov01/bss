import { combineReducers } from "redux";
import todosSlice from "./todosSlice";

const rootReducer = combineReducers({
  todosSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
