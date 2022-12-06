import React from 'react';

import TaskInfo from '../index';
import Modal from '../../modal/index';
import styles from '../../modal/modal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { set_task } from '../../../redux/actions/setTask';

const Queue = () => {
    const [isActiveAddTask, setActiveAddTask] = React.useState(false);
    const [isActiveTaskInfo, setActiveTaskInfo] = React.useState(false);
    const [valueInput, setValueInput] = React.useState('');
    const [nameOfTask, setNameOfTask] = React.useState('');
    const [indexOfTask, setIndexOfTask] = React.useState('');
    
    const dispatch = useDispatch();
    const { value, index } = useSelector(store => store);

    const modalAddTask = () => (
        <Modal title='add task' onClose={() => setActiveAddTask(false)}>
            <div className={styles.modal__body}>
            <form className='form'>
                <div className='form__name'>
                    <input type="text" className="user" placeholder="task name" onChange={(e) => setValueInput(e.target.value)}/>
                </div>
                <button className='button' onClick={(e) => handle(e)} >confirm</button>
            </form>
            </div>
        </Modal> 
    )

    const modalTaskInfo = () => (
        <Modal title={nameOfTask}  onClose={() => setActiveTaskInfo(false)}>
            <div className={styles.modal__body}>
            <TaskInfo />
            </div>
        </Modal> 
    )

    const handle = (e) => {
        e.preventDefault();
        setActiveAddTask(false);
        dispatch(set_task({ index, valueInput }));
        setValueInput('');
    }

    const handleSetState = (name, index) => {
        setActiveTaskInfo(true);
        setNameOfTask(name);
        setIndexOfTask(index);
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault();
    }

    const dragStartHandler = (e) => {
        e.preventDefault();
    }

    const dragEndHandler = (e) => {
        e.preventDefault();
    }

    const dragDropHandler = (e) => {
        e.preventDefault();
    }


  return (
    <>
        {
            isActiveAddTask 
            ? modalAddTask()
            : ''
        }
            {
                isActiveTaskInfo 
                    ? modalTaskInfo() 
                    : ''
            }
            {
                value[index]?.tasks?.length > 0 
                    ? value[index]?.tasks.map((it, i) => (
                        <div 
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dragDropHandler(e)}
                            draggable={true}
                            className='block__add' 
                            onClick={ () => handleSetState(it.task_name, i) }
                        >
                            <p>{ it.task_name }</p>
                        </div>
                    ))
                    : ''
            }
            <div className='block__add' onClick={ () => setActiveAddTask(true) }>
                <span>+</span>
                <p>add new task</p>
            </div>
    </>
  )
}

export default Queue;