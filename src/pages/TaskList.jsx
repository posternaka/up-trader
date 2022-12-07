import React from 'react';
import Board from '../components/createProject/blocks/Board';
import Header from '../components/header/Header';

import { useSelector } from 'react-redux';

const itemsDiv = [
  {id: 1, type: 'queue', theme: '--queue'},
  {id: 2, type: 'development', theme: '--development'},
  {id: 3, type: 'done', theme: '--done'},
];

const TaskList = (  ) => {
  const [currentType, setCurrentType] = React.useState('');

  const { value, index } = useSelector(store => store);

  if(!value[index]) {
    return null;
  }

  return (
    <div className='wrapper'>
      <Header title={ value[index].project_name } taskList={value.tasks} />
      <div className='task__blocks'>
        {
          itemsDiv.map(it => (
            <Board key={it.id} board={it} />
          ))
        }
      </div>
    </div>   
  )
}

export default TaskList;