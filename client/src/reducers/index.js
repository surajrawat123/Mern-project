import { combineReducers } from "redux";
import ItemsData from "./ItemsData";
import FindId from './FindId';

const rootReducer = combineReducers({
    ItemsData,
    FindId,
});

export default rootReducer;