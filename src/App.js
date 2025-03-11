import React, { useEffect, useReducer, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const taskTitleRef = useRef(null);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      savedTasks.forEach((task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
      });
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (state.tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  // Auto-focus the task input field on mount
  useEffect(() => {
    taskTitleRef.current.focus();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskTitle.trim()) {
      const newTask = {
        id: uuidv4(), // Generate a unique id using uuid
        title: taskTitle,
        description: taskDescription || 'No description provided',
        completed: false,
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Task Manager</h1>
      </header>

      <TaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        taskTitleRef={taskTitleRef}
        handleAddTask={handleAddTask}
      />

      <TaskList tasks={state.tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
