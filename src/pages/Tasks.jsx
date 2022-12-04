import React from 'react';
import { useSelector } from 'react-redux';

import CreateProject from '../components/createProject/index';
import Modal from '../components/modal/index';
import styles from '../components/modal/modal.module.scss';

const Tasks = () => {
  const [isActive, setActive] = React.useState(false);
  
  const { value, index } = useSelector(store => store);

  return (
    <div className='wrapper'>
       {
       isActive 
       ? <Modal title='#' onClose={() => setActive(false)}>
           <>
             {/* <div className={styles.modal__header}>
                   <h3 className={styles.modal__title}>'sdfh'</h3>
                   <span className={styles.modal__close} onClick={() => setActive(false)}>
                       &times;
                   </span>
               </div>
               <div className={styles.modal__body}>
                   <div className={styles.modal__content}><p>Add your content here</p></div>
               </div>
               <div className={styles.modal__footer} onClick={() => setActive(false)}><button>Cancel</button></div> */}
               <div className={styles.modal__body}>
                 <CreateProject />
               </div>
               <div className={styles.modal__footer}>
                   <button className='button'>Confirm</button>
               </div>
           </>
       </Modal> 
       : ''
   }
        <h1 className='task__title'>{value[index].project_name}</h1>
        <div className='task__blocks'>
          <div className='task__block task__block--queue'>
            <p>queue</p>
            <div className='block__add' onClick={() => setActive(true)}>
              <span>+</span>
              <p>add new task</p>
            </div>
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