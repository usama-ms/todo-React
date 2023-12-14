import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'src/todoSlice/TodoListSlice.js';

const DeleteTaskButton = ({ taskId }) => {

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <button className='delete-btn' onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default DeleteTaskButton;
