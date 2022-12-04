import { PROJECT_INDEX } from '../actions/types';

const index = 0;

export const projectIndex = (state = index, action) => {
    switch(action.type) {
        case PROJECT_INDEX: {
            return state = action.payload;
        }

        default: {
            return state
        }
    }
}