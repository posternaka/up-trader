import { SET_END_DATE } from './types';

export const set_end_date = ({ date, type, task_number, index }) => {
    return {
        type: SET_END_DATE,
        payload: { date, type, task_number, index },
    };
}