import { SET_PROJECT } from './types';

export const set_project = (value) => {
    return {
        type: SET_PROJECT,
        payload: value,
    };
}