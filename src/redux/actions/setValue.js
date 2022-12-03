import { SET_VALUE } from './types';

export const set_value = (value) => {
    return {
        type: SET_VALUE,
        payload: value,
    };
}