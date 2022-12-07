import { SET_SUBTASK } from './types';

export const set_subtask = ({ value, type, task_number, index, check = false}) => {
    return {
        type: SET_SUBTASK,
        payload: { value, type, task_number, index, check },
    };
}