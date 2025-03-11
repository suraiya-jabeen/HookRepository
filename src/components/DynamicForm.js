import React, { useState } from 'react';

const DynamicForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask(title, description); // Pass task data to parent component
      setTitle(''); // Reset title input
      setDescription(''); // Reset description input
    } else {
      alert('Please fill out both fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title dynamically
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description dynamically
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default DynamicForm;
