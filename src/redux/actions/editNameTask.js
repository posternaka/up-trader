import { EDIT_NAME_TASK } from './types';

export const edit_task_name = ({ value, type, task_number, index }) => {
    return {
        type: EDIT_NAME_TASK,
        payload: { value, type, task_number, index }
    };
}