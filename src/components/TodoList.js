import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

import { useDrop } from 'react-dnd';

const ItemTypes = {
  TODO: 'todo',
};
const TodoListContainer = styled.div`
  margin-top: 20px;
`;

function TodoList({ todos, onToggle, onDelete, moveTodo }) {
  const [, ref] = useDrop({
    accept: ItemTypes.TODO,
  });
  

  return (
    <TodoListContainer ref={ref}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          index={index}
          moveTodo={moveTodo}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
