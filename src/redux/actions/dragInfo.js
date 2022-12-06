import { DRAG_INFO } from './types';

export const drag_info = ({ task_number, board_type}) => {
    return {
        type: DRAG_INFO,
        payload: {
            task_number,
            board_type,
        },
    };
}