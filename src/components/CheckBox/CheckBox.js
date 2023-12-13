import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete } from 'src/todoSlice/TasksSlice.js';

const Checkbox = ({ taskId }) => {

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const handleToggleComplete = () => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <input
      type="checkbox"
      checked={tasks.find(task => task.id === taskId)?.isCompleted || false}
      onChange={handleToggleComplete}
    />
  );
};

export default Checkbox;
