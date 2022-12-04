import React from 'react';

import Modal from '../components/modal/index';
import styles from '../components/modal/modal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { set_task } from '../redux/actions/setTask';

const Tasks = () => {
  const [isActive, setActive] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');
  
  const dispatch = useDispatch();
  const { value, index } = useSelector(store => store);
  console.log(value[index].tasks);

  const handle = (e) => {
    e.preventDefault();
    setActive(false);
    dispatch(set_task({ index, valueInput }));
    setValueInput('');
  }

  return (
    <div className='wrapper'>
      {
        isActive 
        ? <Modal title='add task' onClose={() => setActive(false)}>
            <>
                <div className={styles.modal__body}>
                  <form className='form'>
                    <div className='form__name'>
                        <input type="text" className="user" placeholder="task name" onChange={(e) => setValueInput(e.target.value)}/>
                    </div>
                    <button className='button' onClick={(e) => handle(e)} >confirm</button>
                  </form>
                </div>
            </>
        </Modal> 
        : ''
      }
      <h1 className='task__title'>{value[index].project_name}</h1>
      <div className='task__blocks'>
        <div className='task__block task__block--queue'>
          <p>queue</p>
          {
            value[index]?.tasks?.length > 0 
            ? value[index]?.tasks.map((it, i) => (
              <div className='block__add' onClick={() => setActive(true)}>
                <p>{it.task_name}</p>
              </div>
            ))
            : <div className='block__add' onClick={() => setActive(true)}>
                <span>+</span>
                <p>add new task</p>
              </div>
          }
        </div>
        <div className='task__block task__block--development'>
          <p>development</p>
        </div>
        <div className='task__block task__block--done'>
          <p>done</p>
        </div>
      </div>
    </div>   
  )
}

export default Tasks;