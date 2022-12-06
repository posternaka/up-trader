import { SET_TASK } from './types';

export const set_task = ({ index, valueInput, board_type }) => {
    return {
        type: SET_TASK,
        payload: { index, valueInput, board_type },
    };
}