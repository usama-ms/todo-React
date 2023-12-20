import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { editTask } from 'src/api/todoApi';

const Checkbox = ({ taskId, tasks }) => {
  
  const queryClient = useQueryClient();

  const checkBoxMutation = useMutation(
    editTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('getTasks');
    },
  }
  );

  const handleToggleComplete = (event) => {
    const isCompleted = event.target.checked;
    checkBoxMutation.mutate({ taskId: taskId, updatedTask: { isCompleted: isCompleted } });
  };

  return (
    <input
      type="checkbox"
      checked={tasks.find((task) => task.id === taskId).isCompleted}
      onChange={handleToggleComplete}
    />
  );
};

export default Checkbox;
