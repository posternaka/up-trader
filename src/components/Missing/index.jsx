import React from 'react';
import ModalWindow from '../modal/ModalWindow';
import ModalForMissing from '../modal/ModalForMissing';

import { useDispatch } from 'react-redux';
import { set_project } from '../../redux/actions/setProject.js';

const Missing = () => {
  const [isActive, setActive] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');

  const dispatch = useDispatch();

  const handle = () => {
    setActive(false);
    setValueInput('');
    return valueInput ? dispatch(set_project(valueInput)) : null;
  }

  return (
      <div className='missing'>
        <ModalWindow open={isActive} title='add new project' onClose={() => setActive(false)} onClickHandler={handle} >
          <ModalForMissing setValueInput={setValueInput} />
        </ModalWindow>
        <div className='missing__wrapper' onClick={() => setActive(true)}>
            <span>+</span>
            <p>add new project</p>
        </div>
      </div>
  )
}

export default Missing;