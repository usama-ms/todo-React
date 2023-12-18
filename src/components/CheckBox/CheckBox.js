import React from 'react';

const Checkbox = ({ taskId, tasks, toggleComplete }) => {

  const handleToggleComplete = (event) => {
    const isCompleted = event.target.checked;
    toggleComplete({ taskId, isCompleted });
  };

  return (
    <input
      type="checkbox"
      checked={tasks.find(task => task.id === taskId).isCompleted}
      onChange={handleToggleComplete}
    />
  );
};

export default Checkbox;
