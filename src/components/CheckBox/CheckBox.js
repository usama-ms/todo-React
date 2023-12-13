import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '/Users/mergestackemployee/todo/src/todoSlice/TasksSlice.js';

const Checkbox = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <input
      type="checkbox"
      checked={taskId.isCompleted}
      onChange={handleToggleComplete}
    />
  );
};

export default Checkbox;


// import React from 'react';

// const Checkbox = ({ setTasks, taskId }) => {
//     const handleToggleComplete = (taskId) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
//             )
//         );
//     };
//     return (
//         <input type="checkbox" checked={taskId.isCompleted}
//             onChange={() => handleToggleComplete(taskId)}
//         />
//     );
// };

// export default Checkbox;
