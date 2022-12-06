import { PROJECT_INDEX } from '../actions/types';

let localStorageState;

try {
    localStorageState = JSON.parse(localStorage.getItem('index'));
} catch (error) {
    localStorageState = 0;
}

const index = localStorageState || 0;

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