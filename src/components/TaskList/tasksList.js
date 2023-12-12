import React from 'react';
import { useState } from 'react';
import DeleteTaskButton from '../DeleteTask/deleteTask.js';
import '/Users/mergestackemployee/todo/src/components/TaskList/tasklist.css';
import EditTaskButton from '../EditTask/editTask.js';
import Checkbox from '/Users/mergestackemployee/todo/src/components/CheckBox/checkBox.js';

const TaskList = ({ tasks, setTasks }) => {
    const [editableTaskId, setEditableTaskId] = useState(null);

    const handleToggleEdit = (taskId) => {
        setEditableTaskId(taskId === editableTaskId ? null : taskId);
    };

    const handleSaveTask = (taskId, newName) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, name: newName } : task
            )
        );
        handleToggleEdit(taskId);
    };

    const handleToggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    if (!tasks) {
        return null;
    }

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

export default TaskList;
