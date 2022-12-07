import React from 'react';
import styles from '../createProject/taskinfo.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { add_comment } from '../../redux/actions/addComment';
import { add_description } from '../../redux/actions/addDescription';
import { set_subtask } from '../../redux/actions/setSubtask';
import { set_check } from '../../redux/actions/setCheck';

import ModalWindow from './ModalWindow';
import ModalForCreateSubtask from './ModalForCreateSubtask';

const ModalForEditTask = ({ board, task, index }) => {
    console.log(task);
    const [comment, setComment] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [valeuSubtask, setValueSubtask] = React.useState('');
    const [isActive, setActive] = React.useState(false);

    console.log(task.subtasks);

    // const { value, index } = useSelector(store => store);
    const dispatch = useDispatch();

    const uniqueHandle = (dispatch_method, state, current_value) => {
        dispatch(dispatch_method({ value: current_value, type: board.type, task_number: task.task_number, index }));
        state('')
    }

    const handleKeyDownName = (e, dispatch_method, state, current_value) => (
        e === "Enter" ? uniqueHandle(dispatch_method, state, current_value) : false
    )

    const handle = () => {
        setActive(false);
        uniqueHandle(set_subtask, setValueSubtask, valeuSubtask);
    } 

  return (
    <div className={styles.task}>
        <div className={styles.task__wrapper}>
            <div className={styles.task__time}>
                <div><span className={styles.small_text}>date of creation</span><p>06.12.2022</p></div>
                <div><span className={styles.small_text}>days in development</span><p>6</p></div>
            </div>
            <div className={styles.task__subtasks}>
                <ModalWindow 
                    open={isActive} 
                    title={'add new subtask'} 
                    onClose={() => setActive(false)} 
                    onClickHandler={handle} 
                >
                    <ModalForCreateSubtask setValueSubtask={setValueSubtask} />
                </ModalWindow>
                {
                    task.subtasks.map((it, i) => (
                        <div 
                            className={styles.item} 
                            onClick={() => dispatch(set_check(
                                    { 
                                        check: it.check, 
                                        type: board.type, 
                                        task_number: task.task_number, 
                                        index_subtask: i,
                                        index 
                                    }))} 
                        >
                            <input 
                                type="checkbox"
                                checked={it.check} 
                            />
                            <span className={it.check ? styles.check : null} >{it.value}</span>
                            {/* <span className={!it.check ? 'check' : null}>{it.value}</span> */}
                        </div>
                    ))
                }
                <div className={styles.add} onClick={() => setActive(true)} >
                    <span>+</span>
                    <p>add subtask</p>
                </div>
            </div>
            <div className={styles.task__comments}>
                {
                    task.comments.map(it => (
                        <div className={styles.item}>
                            <span className={styles.avatar}></span>
                            <div className={styles.comment}>
                                <span className={styles.small_text}>author</span>
                                <p>{it}</p>
                            </div>
                        </div>
                    ))
                }
                <div className={styles.item}>
                    <span className={styles.avatar}></span>
                    <div className={styles.comment}>
                        <span className={styles.small_text}>author</span>
                        <div>
                            <input 
                                type="text" 
                                placeholder='add comment' 
                                onChange={(e) => setComment(e.target.value)} 
                                onKeyDown={(e) => handleKeyDownName(e.key, add_comment, setComment, comment)}
                            />
                            {/* <span 
                                onClick={() => uniqueHandle(add_comment, setComment, comment)}
                            >
                                &#x2714;
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.task__description}>
                <textarea 
                    placeholder='add description' 
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={(e) => handleKeyDownName(e.key, add_description, setDescription, description)}
                ></textarea>
            </div>
            <div className={styles.task__file}>
                <input type="file" />
            </div>
            <div className={styles.task__end}>
                <input type="date" name="" id="" />
            </div>
        </div>
    </div>
  )
}

export default ModalForEditTask