import React from 'react';
import { useDispatch } from 'react-redux';

import ModalWindow from '../../modal/ModalWindow';
import ModalForEditTask from '../../modal/ModalForEditTask';

import { onDrop } from '../../../utils/dragUtils.js';
import { drag_info } from '../../../redux/actions/dragInfo';

const Task = ({ board, task, index }) => {

  const [isActive, setActive] = React.useState(false);
  const [taskNumber, setTaskNumber] = React.useState('');


  const dispatch = useDispatch();

  const dragStartHandler = (e) => {
    dispatch(drag_info( { task_number: task.task_number, board_type: board.type } ))
  }

  const dropHandler = (e) => {
    e.preventDefault();
    onDrop({ board_type: board.type, task_number: task.task_number });
  }
  
  const dragEndHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = 'none'
  } 

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    if(e.target.className === 'block__add') {
      e.target.style.boxShadow = '0 4px 3px grey';
    }
  }
  
  return (
    <>
      <ModalWindow board={board} taskNumber={taskNumber} title={task.task_name} open={isActive} onClose={() => setActive(false)}>
        <ModalForEditTask board={board} task={task} index={index} onClose={() => setActive(false)}/> 
      </ModalWindow> 
      <div 
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e)}
        onDragStart={(e) => dragStartHandler(e)}

        draggable={true}
        className='block__add' 
        onClick={ () => setActive(true) }
      >
        <p onClick={() => setTaskNumber(task.task_number)}>{ task.task_name }</p>
      </div>
    </>
  )
}

export default Task;