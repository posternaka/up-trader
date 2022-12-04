import { SET_PROJECT, SET_TASK } from '../actions/types';

const initStore = [];

export const data = (state = initStore, action) => {
    switch(action.type) {
        case SET_PROJECT: {
            return [
                ...state,
                {
                    project_name: action.payload,
                    tasks: [],
                }
            ]
        }

        case SET_TASK: {
            return [
                ...state, state[action.payload.index].tasks.push(
                    {             
                        task_name: action.payload.valueInput,
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
                )
            ]
        }

        default: {
            return state
        }
    }
}



// {             
//     task_name: action.payload,
//     task_number: 0,
//     description: '',
//     date_of_creation: '',
//     time_at_work: '',
//     expiration_date: '',
//     priority: '',
//     files: [],
//     status: '',
//     subtasks: [],
//     comments: [],
// }