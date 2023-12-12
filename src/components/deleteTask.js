import React from 'react';

const DeleteTaskButton = ({ onDelete, taskId }) => {
  const handleDeleteClick = () => {
    onDelete(taskId);
  };

  return (
    <button className='delete-btn' onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default DeleteTaskButton;
