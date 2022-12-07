import React from 'react';
import styles from './modal.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { edit_task_name } from '../../redux/actions/editNameTask';

const ModalWindow = ({ board = false, taskNumber, title, open, onClose, children, onClickHandler }) => {
    const [value, setValue] = React.useState('');
    const [isEditTask, setEditTask] = React.useState(false);

    const dispatch = useDispatch();
    const { index } = useSelector(store => store);


    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
            onClose(false);
            break;
            default:
        }
    };


    const editTaskNameHandle = () => {
        setEditTask(false);
        dispatch(edit_task_name({ value, type: board.type, task_number: taskNumber, index }))
    }

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    const showSettingsForTaskTitleHandle = () => {
        return isEditTask 
            ?   <div className={styles.modal__header_edit}>
                    <input type='text' onChange={(e) => setValue(e.target.value) } />
                    <span onClick={() => editTaskNameHandle()} >&#x2714;</span>
                </div> 
            :   <div className={styles.modal__header_edit}>
                    <p3 className={styles.modal__title}>{title}</p3>
                    <span onClick={() => setEditTask(true)} >&#x270e;</span>
                </div>
    }

    if(!open) {
        return null;
    }

    return (
        <div className={styles.modal} onClick={() => onClose(false)}>
            <div className={styles.modal__dialog} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__header}>
                    {
                        board.type === 'queue'  || board.type === 'development'
                            ? showSettingsForTaskTitleHandle() 
                            : <p3 className={styles.modal__title}>{title}</p3>
                    }
                    <span className={styles.modal__close} onClick={() => onClose(false)}>
                        &times;
                    </span>
                </div>
                { children }
                <button 
                    onClick={(e) => onClickHandler(e)} 
                    className='button'
                >
                    confirm
                </button>
            </div>
        </div>
    );
};

export default ModalWindow;