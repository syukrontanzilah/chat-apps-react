import { combineReducers } from "redux";
import authReducers from "./authReducer";
import dataDummy from './dummyData';
import dataDummyRoom from './dummyDataRoom';

const reducers = combineReducers({
  authState: authReducers,
  dataDummy : dataDummy,
  dataDummyRoom : dataDummyRoom,
});

export default reducers;
