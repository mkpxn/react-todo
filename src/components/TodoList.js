import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const todos = [
  {description: 'Einkaufen', done: false},
  {description: 'Sport', done: true},
  {description: 'Programmieren', done: true},
];

const TodoList = () => {
  return (
    <section>
      <header className='header'>
        <div className='header__inner'>
          <h1>To-Dos</h1>
        </div>
      </header>
      <div className='todo-list'>
        <Todo description={todos[0].description} done={todos[0].done} />
        <Todo description={todos[1].description} done={todos[1].done} />
        <Todo description={todos[2].description} done={todos[2].done} />
      </div>
    </section>
  )
}

export default TodoList