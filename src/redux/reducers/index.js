import { combineReducers } from "redux";
import { data } from './dataReducer';
import { projectIndex } from './projectIndexReducer'

export const reducers = combineReducers({
    value: data,
    index: projectIndex,
});