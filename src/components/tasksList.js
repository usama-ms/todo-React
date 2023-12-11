import React from 'react';
import CreateTask from '/Users/mergestackemployee/todo/src/components/createTask.js';

const TaskList = ({ tasks, onDelete }) => {
    if (!tasks) {
        return null;
      }
  return (
    <div>
      {tasks.map((task) => (
        <CreateTask key={task.id} {...task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
