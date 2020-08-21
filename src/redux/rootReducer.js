import { userReducer } from "../redux/user/userReducer";
import { dataReducer } from "../redux/data/dataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ user: userReducer, data: dataReducer });

export default rootReducer;
