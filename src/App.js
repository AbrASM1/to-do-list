import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ text, description, deadline, priority }) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      description,
      deadline,
      priority,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Container>
  );
}

export default App;
