import React from 'react';

const TaskForm = ({
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  handleAddTask,
  taskTitleRef,
}) => {
  return (
    <form onSubmit={handleAddTask} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        ref={taskTitleRef}
        className="task-input"
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="task-textarea"
      />
      <button type="submit" className="task-submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
