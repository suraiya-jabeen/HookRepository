import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Ensure you're using a proper ID generator
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [filterText, setFilterText] = useState('');

  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(), // Ensure the ID is unique
      title,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(filterText.toLowerCase()) ||
        task.description.toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }, [tasks, filterText]);

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <TaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        addTask={addTask}
      />

      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default TaskManager;
