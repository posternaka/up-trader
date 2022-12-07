import { ADD_DESCRIPTION } from './types';

export const add_description = ({ value, type, task_number, index }) => {
    return {
        type: ADD_DESCRIPTION,
        payload: { value, type, task_number, index },
    };
}