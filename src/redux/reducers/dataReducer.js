import { SET_PROJECT, SET_TASK, SET_TASKS } from '../actions/types';

let localStorageState;

try {
    localStorageState = JSON.parse(localStorage.getItem('value'));
} catch (error) {
    localStorageState = [];
}

const initStore = localStorageState || [];

export const data = (state = initStore, action) => {
    switch(action.type) {
        case SET_PROJECT: {
            return [
                ...state,
                {
                    project_name: action.payload,
                    task_number_count: 0,
                    tasks: {
                        queue: [],
                        development: [],
                        done: [],
                    },
                }
            ]
        }

        case SET_TASK: {
            // const count_task = state[action.payload.index].task_number_count + 1;
            state[action.payload.index].task_number_count++;

            state[action.payload.index].tasks[action.payload.board_type].push(
                {
                    task_name: action.payload.valueInput,
                    task_number: state[action.payload.index].task_number_count,
                    description: '',
                    date_of_creation: '',
                    time_at_work: '',
                    expiration_date: '',
                    priority: '',
                    files: [],
                    status: '',
                    subtasks: [],
                    comments: [],
                    edit_task: false,
                }
            )

            return [
                ...state
            ]
        }

        case SET_TASKS: {
            state[action.payload.index].tasks = action.payload.tasks;
            return [
                ...state
            ]
        }

        default: {
            return state
        }
    }
}

