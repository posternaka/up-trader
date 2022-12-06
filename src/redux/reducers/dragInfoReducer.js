import { DRAG_INFO } from '../actions/types';

const dragInfoData = {
    task_number: 0,
    board_type: 'queue',
};

export const dragInfo = (state = dragInfoData, action) => {
    switch(action.type) {
        case DRAG_INFO: {
            return {
                task_number: action.payload.task_number,
                board_type: action.payload.board_type,
            }
        }

        default: {
            return state
        }
    }
}