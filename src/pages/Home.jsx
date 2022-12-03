import React from 'react';

import Missing from '../components/missing/index';
import CardProject from '../components/cards_project/index';

import { useSelector } from 'react-redux';

const Home = () => {

  const { value } = useSelector(store => store);

  return (
    <div className='wrapper'>
      <div className='content'>
        {value.length > 0 ? <CardProject /> : <Missing />}
      </div>
    </div>
  )
}

export default Home