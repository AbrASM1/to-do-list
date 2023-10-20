import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListContainer = styled.div`
  margin-top: 20px;
`;

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
