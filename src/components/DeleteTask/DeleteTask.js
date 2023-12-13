import React from 'react';

const DeleteTaskButton = ({ setTasks, taskId }) => {
  const handleDeleteClick = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <button className='delete-btn' onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default DeleteTaskButton;
