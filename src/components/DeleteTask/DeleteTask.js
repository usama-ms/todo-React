import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import {deleteTask} from 'src/api/todoApi';

const DeleteTaskButton = ({ taskId }) => {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation(() => deleteTask(taskId), {
    onSuccess: () => {
      queryClient.invalidateQueries('getTasks');
    },
  });

  const handleDeleteClick = () => {
    deleteTaskMutation.mutate();
  };

  return (
    <button className='delete-btn' onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default DeleteTaskButton;
