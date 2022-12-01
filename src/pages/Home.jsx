import React from 'react';

import Missing from '../components/Missing/index';

const Home = () => {
  const arr = [];

  return (
    <div className='wrapper'>
      {arr.length > 0 ? arr.map(it => <h1>{it}</h1>) : <Missing />}
    </div>
  )
}

export default Home