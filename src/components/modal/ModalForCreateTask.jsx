import React from 'react';
import styles from './modal.module.scss';

const ModalForCreateTask = ({ setValueInput }) => {
  return (
    <div className={styles.modal__body}>
        <div className='form'>
            <div className='form__name'>
                <input type="text" placeholder="task name" onChange={(e) => setValueInput(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default ModalForCreateTask;