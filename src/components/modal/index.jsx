import React from 'react';
import styles from './modal.module.scss';

const Modal= ({ title, onClose, isEditTask = false, children }) => {
    const [value, setValue] = React.useState('');

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
            onClose(false);
            break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return (
        <div className={styles.modal} onClick={() => onClose(false)}>
            <div className={styles.modal__dialog} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__header}>
                    {
                        isEditTask 
                        ? <div className={styles.modal__header_edit}>
                            <input type='text' onChange={(e) => setValue(e.target.value) } />
                            <span>&#x2714;</span>
                          </div> 
                        : <div className={styles.modal__header_edit}>
                            <h3 className={styles.modal__title}>{title}</h3>
                            <span>&#x270e;</span>
                          </div>
                    }
                    
                    <span className={styles.modal__close} onClick={() => onClose(false)}>
                        &times;
                    </span>
                </div>
                { children }
            </div>
        </div>
    );
};

export default Modal;