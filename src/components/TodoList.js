import React from 'react';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {

  const [openCount, setCount] = useState(0);
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem('items');
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  const [textInput, setTextInput] = useState('');

  const changeText = (e) => {
    setTextInput(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, {description: textInput, done: false}];
    setTodos(newTodos);
    setTextInput('');
  }

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  }

  const deleteTodo = (e, index) => {
    e.stopPropagation();
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  useEffect(() => {
    const countOpen = () => {
      const doneTodos = todos.filter((item) => {
        return !item.done;
      });
      setCount(doneTodos.length);
    };
    countOpen();
    localStorage.setItem('items', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className='todo-list'>
      <header className='header'>
        <div className='header__inner'>
          <h1>Hallo!</h1>
          <p>Du hast noch <span className="header__opentodos">{openCount}</span> offene Todos</p>
          <form className="header__form">
            <input 
              type="text" 
              placeholder="neues Todo..." 
              onChange={changeText} 
              value={textInput}></input>
            <input type="submit" value="erstellen" onClick={submit}></input>
          </form>
        </div>
      </header>
      <ul className='todos'>
        {todos.map((item, index) => {
          return <Todo description={item.description} done={item.done} key={index} index={index} onChangeTodo={changeTodo} onDeleteTodo={deleteTodo} />
        })}
      </ul>
    </section>
  )
}

export default TodoList