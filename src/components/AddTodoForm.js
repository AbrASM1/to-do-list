import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  border: none;
  outline: none;
  box-shadow: none;
`;

const PrioritySelect = styled.select`
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  border: none;
  outline: none;
  box-shadow: none;
`;

const AddButton = styled.button`
  background-color: #539adb/* #4caf50 */;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
`;

const DescriptionInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  border: none;
  outline: none;
  box-shadow: none;
`;

const DeadlineInput = styled.input`
  padding: 12px;
  font-size: 16px;
  padding-left: 18px;
  margin-bottom: 8px;
  border: none;
  outline: none;
  box-shadow: none;
`;

function AddTodoForm({ onAddTodo }) {
  const [inputText, setInputText] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      onAddTodo({
        id: new Date().getTime(), // Generate a unique ID (timestamp)
        text: inputText,
        description,
        deadline,
        priority,
        completed: false, // Assuming a default value for completed
      });
      setInputText('');
      setDescription('');
      setDeadline('');
      setPriority('normal');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new todo"
      />
      <DescriptionInput
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <DeadlineInput
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <PrioritySelect
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="critical">Critical</option>
      </PrioritySelect>
      <AddButton type="submit">Add</AddButton>
    </Form>
  );
}

export default AddTodoForm;
