import { combineReducers } from "redux";
import authReducers from "./authReducer";

const reducers = combineReducers({
  authState: authReducers,
});

export default reducers;
