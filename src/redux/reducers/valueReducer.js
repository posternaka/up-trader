import { SET_VALUE } from '../actions/types';

const initStore = [];

export const setValue = (state = initStore, action) => {
    switch(action.type) {
        case SET_VALUE: {
            return [
                ...state,
                {
                    project_name: action.payload,
                    tasks: [
                        {
                            task_name: '',
                            task_number: 0,
                            description: '',
                            date_of_creation: '',
                            time_at_work: '',
                            expiration_date: '',
                            priority: '',
                            files: [],
                            status: '',
                            subtasks: [],
                            comments: [],
                        }
                    ],
                }
            ]
        }

        default: {
            return state
        }
    }
}