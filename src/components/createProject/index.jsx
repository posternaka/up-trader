import React from 'react';
// import styles from './createProject.module.scss';
import './style.scss';

const CreateProject = () => {
  return (
    <form className='form'>
        <div className='form__name'>
            <span>add task</span>
            <input type="text" class="user" placeholder="Task Name"/>
        </div>
        <div className='form__description'>
            <span>add description</span>
            <textarea cols="30" rows="4" placeholder="Description"></textarea>
        </div>
        <div className='form__date'>
            <span>end date</span>
            <input type="date" />
        </div>
        <div className='form__priority'>
            <span>priority</span>
            <input type="checkbox" />
        </div>
        <div className='form__files'>
            <span>attach files</span>
            <input type="file" />
        </div>
    </form>
  )
}

export default CreateProject;