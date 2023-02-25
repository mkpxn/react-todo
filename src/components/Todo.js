import React from 'react';
import './Todo.css';

const Todo = ({description, done}) => {
  return (
    <li className={
      done 
        ? 'todo done' 
        : 'todo open'
      }>
      <h2>{description}</h2>
      <button className='todo__button'>löschen</button>
    </li>
  )
}

export default Todo