import React from 'react';
import styles from './modal.module.scss';

const ModalForCreateSubtask = ({ setValueSubtask }) => {
    return (
        <div className={styles.modal__body}>
            <form className='form'>
                <div className='form__name'>
                    <input type="text" placeholder="subtask name" onChange={(e) => setValueSubtask(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default ModalForCreateSubtask;