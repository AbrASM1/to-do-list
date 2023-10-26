import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const ItemTypes = {
  TODO: 'todo',
};

const TodoItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  position: relative;
  padding: 16px;
  background-color: ${props => {
    if (props.priority === 'important') return '#ffeb3b';
    if (props.priority === 'critical') return '#ff4081';
    return '#788995';
  }};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  opacity: ${props => props.completed ? '0.5' : '1'};
  cursor: move;
  border: 2px solid transparent;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: relative;
    display: inline-block;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 1px solid #ccc;
    margin-right: 10px;

    &::after {
      content: "\u2713";
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }

  input:checked + .checkmark {
    background-color: #2196f3;
  }

  input:checked + .checkmark::after {
    display: block;
  }
`;

const TodoText = styled.p`
  font-size: 18px;
  margin: 0;
  flex-grow: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  max-width: 80%;
  word-wrap: break-word;
`;

const Deadline = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

function DraggableTodoItem({ todo, onToggle, onDelete, index, moveTodo }) {
  const [, ref] = useDrag({
    type: ItemTypes.TODO,
    item: { index, id: todo.id },
  });

  return (
    <TodoItemContainer
      completed={todo.completed}
      priority={todo.priority}
      ref={ref}
    >
      <Checkbox>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </Checkbox>
      <div>
        <TodoText completed={todo.completed}>
          {todo.text}
        </TodoText>
        <Description>{todo.description}</Description>
        {todo.deadline && <Deadline>Deadline: {todo.deadline}</Deadline>}
      </div>
      <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
    </TodoItemContainer>
  );
}

export default DraggableTodoItem;
