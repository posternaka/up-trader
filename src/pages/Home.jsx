import React from 'react';
import { Link } from 'react-router-dom';

import Missing from '../components/missing/index';

import { useDispatch, useSelector } from 'react-redux';
import { project_index } from '../redux/actions/projectIndex';

const Home = () => {
    const dispatch = useDispatch();
    const { value } = useSelector(store => store);

    return (
      <div className='wrapper'>
        <div className='content'>
          <div className='card_project'>
              {
                  value.map((it, i) => (
                    <Link to='/tasks' key={i} onClick={() => dispatch(project_index(i))}>
                      <div className='card_project__item' >
                          <h1>{it.project_name}</h1>
                          <p>project</p>
                      </div>
                    </Link>
                  ))
              }
              <Missing />
          </div>
        </div>
      </div>
    )
}

export default Home;