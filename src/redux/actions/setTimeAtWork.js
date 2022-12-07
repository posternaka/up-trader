import { SET_TIME_AT_WORK } from './types';

export const set_time_ar_work = ({ type, task_number, index }) => {
    return {
        type: SET_TIME_AT_WORK,
        payload: { type, task_number, index },
    };
}