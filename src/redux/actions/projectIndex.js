import { PROJECT_INDEX } from './types';

export const project_index = (index) => {
    return {
        type: PROJECT_INDEX,
        payload: index,
    };
}