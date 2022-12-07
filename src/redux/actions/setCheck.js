import { SET_CHECK } from './types';

export const set_check = ({ check, type, task_number, index_subtask, index }) => {
    return {
        type: SET_CHECK,
        payload: { check, type, task_number, index_subtask, index },
    };
}