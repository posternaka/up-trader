import { combineReducers } from "redux";
import { setValue } from './valueReducer';
import { projectIndex } from './projectIndexReducer'

export const reducers = combineReducers({
    value: setValue,
    index: projectIndex,
});