import store from '../redux/store';
import { set_tasks } from '../redux/actions/setTasks';

export const onDrop = ({ board_type, task_number }) => {
    const { value, index, drag } = store.getState();
    const currentProject = value[index];
    const drag_board = currentProject.tasks[drag.board_type];
    const drag_task_index = drag_board.findIndex(it => it.task_number === drag.task_number)
    if(drag_task_index === -1) {
        return 
    }
    const [ drag_task ] = drag_board.splice(drag_task_index, 1);
    drag_task.type = board_type;

    const tasks = {
        ...currentProject.tasks, 
        [drag.board_type]: drag_board,
    }

    const new_drop = currentProject.tasks[board_type];
    const new_task_index = task_number > - 1 ? task_number : new_drop.length - 1;
    new_drop.splice(new_task_index, 0, drag_task);

    store.dispatch(set_tasks({ tasks, index }))
}

