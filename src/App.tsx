import React, { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Todo, TodosType } from './components/Todo';
import { MessageEmpty } from './components/MessageEmpty';
import { CountBar } from './components/CountBar';
import './global.css';

const initialTodos: TodosType[] = [
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title: string) => {
    const newTodo: TodosType = {
      id: Date.now(), 
      title,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const changeTodoStatus = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function hasTodo():boolean {
    if(todos.length > 0){
      return false;
    }

    return true;
  }

  return (
    <div className="App">
      <Header />

      <div>
        <Form  
          onAddTodo={addTodo}
        />
        <CountBar
          createdTask={todos.length}
          completedTask={todos.filter((todo) => todo.done).length}
          hasBorder={hasTodo()}
        />
        <div className='containerTodo'>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onStatusChange={changeTodoStatus}
                onDeleteTodo={deleteTodo}
              />
            ))
          ) : (
            <MessageEmpty />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
