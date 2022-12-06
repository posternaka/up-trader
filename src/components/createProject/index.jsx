import React from 'react';
import styles from './taskinfo.module.scss';

const TaskInfo = () => {
  return (
    <div className={styles.task}>
        <div className={styles.task__wrapper}>
            <div className={styles.task__time}>
                <div><span className={styles.small_text}>date of creation</span><p>06.12.2022</p></div>
                <div><span className={styles.small_text}>days in development</span><p>6</p></div>
            </div>
            <div className={styles.task__subtasks}>
                <div className={styles.item}>
                    <input type="checkbox" name="" id="" />
                    <span>one one</span>
                </div>
                <div className={styles.add} >
                    <span>+</span>
                    <p>add subtask</p>
                </div>
            </div>
            <div className={styles.task__comments}>
                <div className={styles.item}>
                    <span className={styles.avatar}></span>
                    <div className={styles.comment}>
                        <span className={styles.small_text}>author</span>
                        <p>you do it very well</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <span className={styles.avatar}></span>
                    <div className={styles.comment}>
                        <span className={styles.small_text}>author</span>
                        <input type="text" placeholder='add comment' />
                    </div>
                </div>
            </div>
            <div className={styles.task__description}>
                <textarea rows="3" placeholder='add description'></textarea>
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

export default TaskInfo;