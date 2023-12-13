import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '/Users/mergestackemployee/todo/src/todoSlice/TasksSlice.js';

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

// import React from 'react';

// const DeleteTaskButton = ({ setTasks, taskId }) => {
//   const handleDeleteClick = () => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <button className='delete-btn' onClick={handleDeleteClick}>
//       <i className="fa-solid fa-trash-can"></i>
//     </button>
//   );
// };

// export default DeleteTaskButton;
