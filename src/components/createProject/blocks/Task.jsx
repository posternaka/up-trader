import React from 'react';
import { useDispatch } from 'react-redux';
import store from '../../../redux/store';

import { onDrop } from '../../../utils/dragUtils.js';

import { drag_info } from '../../../redux/actions/dragInfo';

const Task = ({ board, task }) => {
  const dispatch = useDispatch();

  const dragStartHandler = (e) => {
    console.log('dragStartHandler');
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
    <div 
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e)}
      onDragStart={(e) => dragStartHandler(e)}

      draggable={true}
      className='block__add' 
      onClick={ () => console.log('onClick') }
    >
        <p>{ task.task_name }</p>
    </div>
  )
}

export default Task;