import React from 'react';
import Task from './Task';
import styles from '../../modal/modal.module.scss';

import { set_task } from '../../../redux/actions/setTask';
import { useDispatch, useSelector } from 'react-redux';

import { onDrop } from '../../../utils/dragUtils.js';
import { isDragActive } from 'framer-motion';
import Modal from '../../modal';

const Board = ({ board }) => {
  const [isDragActive, setActive] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');
  const { value, index } = useSelector(store => store);
  console.log(value);

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
    <>
      {
        isDragActive 
          ? <Modal title='add task' onClose={() => setActive(false)}>
              <div className={styles.modal__body}>
                <form className='form'>
                    <div className='form__name'>
                        <input type="text" className="user" placeholder="task name" onChange={(e) => setValueInput(e.target.value)}/>
                    </div>
                    <button className='button' onClick={(e) => onClickHandler(e)} >confirm</button>
                </form>
              </div>
            </Modal> 
          : ''
      }
      <div 
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e)}
        className={'task__block task__block' + board.theme}
        data-type='board'
      >
        {
          taskList.map(it => (
            <Task key={it.task_number} board={board} task={it} />
          ))
        }
        {
          board.type === 'queue'
          ? <div className='block__add' >
              <span>+</span>
              <p onClick={() => setActive(true)}>add new task</p>
            </div>
          : ''
        }
      </div>
    </>
  )
}

export default Board;