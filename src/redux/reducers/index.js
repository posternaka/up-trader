import { combineReducers } from "redux";
import { data } from './dataReducer';
import { projectIndex } from './projectIndexReducer';
import { dragInfo } from './dragInfoReducer';
import { search } from './searchValueReducer';

export const reducers = combineReducers({
    value: data,
    index: projectIndex,
    drag: dragInfo,
    search
});