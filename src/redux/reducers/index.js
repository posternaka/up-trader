import { combineReducers } from "redux";
import { data } from './dataReducer';
import { projectIndex } from './projectIndexReducer';
import { dragInfo } from './dragInfoReducer';

export const reducers = combineReducers({
    value: data,
    index: projectIndex,
    drag: dragInfo,
});