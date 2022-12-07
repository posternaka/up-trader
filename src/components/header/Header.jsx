import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ title, taskList }) => {
  const [value, setValue] = React.useState('');

  return (
    <div className='task__header'>
        <Link to='/'>
            <span>&#x27a4;</span>
        </Link>
        <h1 className='task__title'>{ title }</h1>
        <div>
            <div className='task__search'>
                <input type="text" onChange={(e) => setValue(e.target.value)} />
                <span>&#128270;</span>
            </div>
        </div>
    </div>
  )
}

export default Header;