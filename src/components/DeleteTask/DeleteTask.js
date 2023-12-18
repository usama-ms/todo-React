import React from 'react';

const DeleteTaskButton = ({ taskId, deleteTask }) => {

  const handleDeleteClick = () => {
    deleteTask(taskId);
  };

  return (
    <button className='delete-btn' onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default DeleteTaskButton;
