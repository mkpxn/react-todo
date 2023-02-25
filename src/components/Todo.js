import React from 'react';
import './Todo.css';

const Todo = ({description, done}) => {
  return (
    <li className='todo'>
      <h2>{description}</h2>
      <div>{done ? 'erledigt' : 'offen'}</div>
    </li>
  )
}

export default Todo