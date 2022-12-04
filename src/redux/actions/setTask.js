import { SET_TASK } from './types';

export const set_task = ({ index, valueInput }) => {
    return {
        type: SET_TASK,
        payload: { index, valueInput },
    };
}