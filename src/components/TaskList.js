import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleDeleteTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks to show. Please add a task.</p>;
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={`${task.id}-${index}`} // Ensure task.id + index is unique
            task={task}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
