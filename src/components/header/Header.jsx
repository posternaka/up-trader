import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { search } from '../../redux/actions/search';
 
const Header = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div className='task__header'>
        <Link to='/'>
            <span>&#x27a4;</span>
        </Link>
        <h1 className='task__title'>{ title }</h1>
        <div>
            <div className='task__search'>
                <input type="text" onChange={(e) => dispatch(search(e.target.value))} />
                <span>&#128270;</span>
            </div>
        </div>
    </div>
  )
}

export default Header;