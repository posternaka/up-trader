import React from 'react';

import Missing from '../components/missing/index';
import CardProject from '../components/cards_project/index';

const Home = () => {

  return (
    <div className='wrapper'>
      <div className='content'>
        {true ? <CardProject /> : <Missing />}
      </div>
    </div>
  )
}

export default Home