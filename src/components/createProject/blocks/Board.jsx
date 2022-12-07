import React from 'react';
import Task from './Task';

import { set_task } from '../../../redux/actions/setTask';
import { useDispatch, useSelector } from 'react-redux';

import ModalWindow from '../../modal/ModalWindow';
import ModalForCreateTask from '../../modal/ModalForCreateTask';

import { onDrop } from '../../../utils/dragUtils.js';

const Board = ({ board }) => {
  const [isActive, setActive] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');
  const { value, index } = useSelector(store => store);

  const dispatch = useDispatch();

  const taskList = value[index]?.tasks[board.type] || [];

  const dragEndHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = 'none'
  } 
  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  }
  const dragOverHandler = (e) => {
    e.preventDefault();
    if(e.target.getAttribute('data-type') === 'board') {
      e.target.style.boxShadow = '0 4px 3px grey';
    }
  }

  const dropHandler = (e) => {
    e.preventDefault();
    onDrop({ board_type: board.type, task_number: -1 });
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(set_task({ index: index, valueInput: valueInput, board_type: board.type }));
    setActive(false);
  }

  return (
    <div 
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e)}
      className={'task__block task__block' + board.theme}
      data-type='board'
    >
      <ModalWindow open={isActive} title='add task' onClose={() => setActive(false)} onClickHandler={onClickHandler}>
        <ModalForCreateTask setValueInput={setValueInput} onClickHandler={onClickHandler} />
      </ModalWindow>
      {
        taskList.map(it => (
          <Task key={it.task_number} board={board} task={it} index={index} />
        ))
      }
      {
        board.type === 'queue'
        ? <div className='block__add' onClick={() => setActive(true)} >
            <span>+</span>
            <p>add new task</p>
          </div>
        : ''
      }
    </div>
  )
}

export default Board;