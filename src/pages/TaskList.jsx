import React from 'react';
import Board from '../components/createProject/blocks/Board';

import { useSelector } from 'react-redux';

const itemsDiv = [
  {id: 1, type: 'queue', title: 'queue', theme: '--queue', completed: false},
  {id: 2, type: 'development', title: 'development', theme: '--development', completed: false},
  {id: 3, type: 'done', title: 'done', theme: '--done', completed: false},
];

const TaskList = (  ) => {

  const { value, index } = useSelector(store => store);

  if(!value[index]) {
    return null;
  }

  return (
    <div className='wrapper'>
      <h1 className='task__title'>{ value[index].project_name }</h1>
      <div className='task__blocks'>
        {
          itemsDiv.map(it => (
            <Board key={it.type} board={it} />
          ))
        }
      </div>
    </div>   
  )
}

export default TaskList;


{/* <div 
              className={'task__block task__block' + it.theme}
            >
              <p>{it.title}</p>
              {it.tag}
            </div> */}