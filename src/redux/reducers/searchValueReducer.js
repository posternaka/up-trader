import { SEARCH } from '../actions/types';

const value = '';

export const search = (state = value, action) => {
    switch(action.type) {
        case SEARCH: {
            return state = action.payload;
        }

        default: {
            return state
        }
    }
}