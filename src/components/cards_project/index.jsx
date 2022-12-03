import React from 'react';
import Modal from '../modal';
import CreateProject from '../createProject/index';
import styles from '../modal/modal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
// import { setValue } from '../redux/actions/setValueAction';

const CardProject = () => {
    const [isActive, setActive] = React.useState(false);
    const [valueInput, setValue] = React.useState('');

    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const handleSet = () => {
        dispatch(setValue(valueInput));
        setActive(false);
    }

    return (
        <div className='card_project'>
        {
            isActive 
            ? <Modal onClose={() => setActive(false)}>
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
                    <div className={styles.modal__header}>
                        <h3 className={styles.modal__title}>'sdfh'</h3>
                        <span className={styles.modal__close} onClick={() => setActive(false)}>
                            &times;
                        </span>
                    </div>
                    <div className={styles.modal__body}>
                            <CreateProject />
                    </div>
                    <div className={styles.modal__footer} onClick={() => handleSet}>
                        <button>Confirm</button>
                    </div>
                </>
            </Modal> 
            : ''
        }
            {
                store.value.map(it => (
                    <div className='card_project__item' onClick={() => setActive(true)}>
                        <h1>{it.project_name}</h1>
                        <p>project</p>
                    </div>
                )
            )}
            
        </div>
    )
}

export default CardProject;