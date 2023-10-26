import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ThemeSwitcher from './components/ThemeSwitcher';
import "./App.css";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const moveTodo = (fromIndex, toIndex) => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      const [movedTodo] = updatedTodos.splice(fromIndex, 1);
      updatedTodos.splice(toIndex, 0, movedTodo);
      return updatedTodos;
    });
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
    <Container>
      <ThemeSwitcher/>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        moveTodo={moveTodo}
      />
    </Container>
    </DndProvider>
  );
}

export default App;
