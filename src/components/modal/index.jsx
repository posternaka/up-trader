import React from 'react';
import styles from './modal.module.scss';

const Modal= ({ title = 'ggg', onClose, children }) => {

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
                { children }
            </div>
        </div>
    );
};

export default Modal;