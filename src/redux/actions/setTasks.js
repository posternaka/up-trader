import { SET_TASKS } from './types';

export const set_tasks = ( { tasks, index } ) => {
    return {
        type: SET_TASKS,
        payload: { tasks, index }
    };
}