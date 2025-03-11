import React from 'react';

const TaskItem = ({ task, handleDeleteTask }) => {
  return (
    <li className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleDeleteTask(task.id)} className="task-delete">
        Delete Task
      </button>
    </li>
  );
};

export default TaskItem;
