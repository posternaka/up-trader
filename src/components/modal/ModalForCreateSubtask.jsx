import React from 'react';
import styles from './modal.module.scss';

const ModalForCreateSubtask = ({ setValueSubtask }) => {
    return (
        <div className={styles.modal__body}>
            <div className='form'>
                <div className='form__name'>
                    <input type="text" placeholder="subtask name" onChange={(e) => setValueSubtask(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default ModalForCreateSubtask;