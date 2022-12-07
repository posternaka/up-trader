import { ADD_COMMENT, ADD_DESCRIPTION, EDIT_NAME_TASK, SEARCH, SET_CHECK, SET_PROJECT, SET_SUBTASK, SET_TASK, SET_TASKS } from '../actions/types';

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

        case EDIT_NAME_TASK: {
            state[action.payload.index].tasks[action.payload.type]
                .map(it => it.task_number === action.payload.task_number ? it.task_name = action.payload.value : it.task_name);
            return [
                ...state
            ]
        }

        case ADD_COMMENT: {
            state[action.payload.index].tasks[action.payload.type]
                .map(it => it.task_number === action.payload.task_number ? it.comments.push(action.payload.value) : it.comments);
            return [
                ...state
            ]
        }

        case ADD_DESCRIPTION: {
            state[action.payload.index].tasks[action.payload.type]
                .map(it => it.task_number === action.payload.task_number ? it.description = action.payload.value : it.description);
            return [
                ...state
            ]
        }

        case SET_SUBTASK: {
            state[action.payload.index].tasks[action.payload.type]
                .map(it => 
                    it.task_number === action.payload.task_number 
                        ?   it.subtasks.push(
                                {
                                    value: action.payload.value, 
                                    check: action.payload.check,
                                }
                            ) 
                        : it.subtasks);
            return [
                ...state
            ]
        }

        case SET_CHECK: {
            console.log(action.payload);
            state[action.payload.index].tasks[action.payload.type]
                .map(it => 
                    it.task_number === action.payload.task_number 
                        ?   it.subtasks[action.payload.index_subtask].check = !action.payload.check
                        :   it.subtasks[action.payload.index_subtask]
                    )
            return [
                ...state
            ]
        }

        // case SEARCH: {
        //     return [
        //         ...state[action.payload.index].tasks.find(it => it.)
        //     ]
        // }

        default: {
            return state
        }
    }
}

