import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <div className='not_found'>
        <p>Page not found, please try again.</p>
        <Link to='/'>
            <span>&#x27a4;</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound