import React from 'react';
import Modal from '../modal/index';

import { useDispatch } from 'react-redux';
import { set_project } from '../../redux/actions/setProject.js';

const Missing = () => {
  const [isActive, setActive] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');

  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    setActive(false);
    dispatch(set_project(valueInput));
    setValueInput('');
  }

  return (
    <>
      {
        isActive 
        ? <Modal title={'add new project'} onClose={() => setActive(false)}>
            <form className='form'>
              <div className='form__name'>
                  <input type="text" className="user" placeholder="project name" onChange={(e) => setValueInput(e.target.value)} />
              </div>
              <button onClick={(e) => handle(e)} className='button'>confirm</button>
            </form>
          </Modal>
        : ''
      }
      <div className='missing'>
        <div className='missing__wrapper' onClick={() => setActive(true)}>
            <span>+</span>
            <p>add new project</p>
        </div>
      </div>
    </>
  )
}

export default Missing;