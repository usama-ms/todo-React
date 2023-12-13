import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '/Users/mergestackemployee/todo/src/todoSlice/TasksSlice.js';
import DeleteTaskButton from '../DeleteTask/DeleteTask.js';
import '../TaskList/tasklist.css';
import EditTaskButton from '../EditTask/EditTask.js';
import Checkbox from '../CheckBox/CheckBox.js';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
  
    const handleToggleEdit = (taskId) => {
      dispatch(editTask({ taskId, newName: tasks.find((task) => task.id === taskId).name }));
    };
  
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className='taskitems task-container'>
                    {editableTaskId === task.id ? (
                        <form onSubmit={(e) => { e.preventDefault(); handleSaveTask(task.id, e.target.elements.taskInput.value) }}>
                            <input name="taskInput" type="text"
                                defaultValue={task.name} autoFocus
                            />
                        </form>
                    ) : (
                        <div className='taskitems' key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            <>
                                <Checkbox
                                    setTasks={setTasks} taskId={task.id}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <DeleteTaskButton setTasks={setTasks} taskId={task.id} />
                        <EditTaskButton onEdit={handleToggleEdit} taskId={task.id} taskName={task.name} />
                    </div>
                </div>
            ))}
        </div>
    );
  };

// const TaskList = ({ tasks, setTasks }) => {
//     const [editableTaskId, setEditableTaskId] = useState(null);

//     const handleToggleEdit = (taskId) => {
//         setEditableTaskId(taskId === editableTaskId ? null : taskId);
//     };

//     const handleSaveTask = (taskId, newName) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId ? { ...task, name: newName } : task
//             )
//         );
//         handleToggleEdit(taskId);
//     };

//     if (!tasks) {
//         return null;
//     }

    // return (
    //     <div>
    //         {tasks.map((task) => (
    //             <div key={task.id} className='taskitems task-container'>
    //                 {editableTaskId === task.id ? (
    //                     <form onSubmit={(e) => { e.preventDefault(); handleSaveTask(task.id, e.target.elements.taskInput.value) }}>
    //                         <input name="taskInput" type="text"
    //                             defaultValue={task.name} autoFocus
    //                         />
    //                     </form>
    //                 ) : (
    //                     <div className='taskitems' key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
    //                         <>
    //                             <Checkbox
    //                                 setTasks={setTasks} taskId={task.id}
    //                             />
    //                             <p>{task.name}</p>
    //                         </>
    //                     </div>
    //                 )}
    //                 <div className='btns-container'>
    //                     <DeleteTaskButton setTasks={setTasks} taskId={task.id} />
    //                     <EditTaskButton onEdit={handleToggleEdit} taskId={task.id} taskName={task.name} />
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
// };

// export default TaskList;
