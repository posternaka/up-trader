import { ADD_COMMENT } from './types';

export const add_comment = ({ value, type, task_number, index }) => {
    return {
        type: ADD_COMMENT,
        payload: { value, type, task_number, index },
    };
}