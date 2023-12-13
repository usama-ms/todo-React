import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'src/components/TaskList/taskList.css';
import { editTask } from 'src/todoSlice/TasksSlice.js';
import DeleteTaskButton from 'src/components/DeleteTask/DeleteTask.js';
import EditTaskButton from 'src/components/EditTask/EditTask.js';
import Checkbox from 'src/components/Checkbox/Checkbox.js';

const TaskList = () => {

    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [editableTaskId, setEditableTaskId] = useState(null);

    const handleToggleEdit = (taskId) => {
        setEditableTaskId(taskId === editableTaskId ? null : taskId);
    };

    const handleSaveTask = (taskId, newName) => {
        dispatch(editTask({ taskId, newName }));
        setEditableTaskId(null);
    };
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className='taskitems task-container'>
                    {editableTaskId === task.id ? (
                        <form onSubmit={(event) => { event.preventDefault(); handleSaveTask(task.id, event.target.elements.taskInput.value) }}>
                            <input name="taskInput" type="text"
                                defaultValue={task.name} autoFocus
                            />
                        </form>
                    ) : (
                        <div className='taskitems' key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            <>
                                <Checkbox
                                    taskId={task.id}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <DeleteTaskButton taskId={task.id} />
                        <EditTaskButton onEdit={handleToggleEdit} taskId={task.id} taskName={task.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default TaskList
