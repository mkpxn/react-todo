import React from 'react';
import './Todo.css';

const Todo = ({description, done}) => {
  return (
    <div className='todo'>
      <h2>{description}</h2>
      <div>{done ? 'erledigt' : 'offen'}</div>
    </div>
  )
}

export default Todo