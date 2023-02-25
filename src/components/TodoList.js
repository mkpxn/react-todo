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
    <section className='todo-section'>
      <header className='header'>
        <div className='header__inner'>
          <h1>To-Dos</h1>
        </div>
      </header>
      <ul className='todos'>
        {todos.map((item, index) => {
          return <Todo description={item.description} done={item.done} key={index}/>
        })}
      </ul>
    </section>
  )
}

export default TodoList