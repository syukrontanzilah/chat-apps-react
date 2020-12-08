import { combineReducers } from "redux";
import authReducers from "./authReducer";
import dataDummy from './dummyData'

const reducers = combineReducers({
  authState: authReducers,
  dataDummy : dataDummy
});

export default reducers;
