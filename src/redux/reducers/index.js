import { combineReducers } from "redux";
import { setValue } from './valueReducer';

export const reducers = combineReducers({
    value: setValue,
});