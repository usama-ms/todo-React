import React from 'react';
import { useState } from 'react';
import '/Users/mergestackemployee/todo/src/components/tasklist.css';

const TaskList = ({ tasks, setTasks, }) => {
    const [editableTaskId, setEditableTaskId] = useState(null);
    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };
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
                        <>
                            <form onSubmit={(e) => { e.preventDefault(); handleSaveTask(task.id, e.target.elements.taskInput.value) }}>
                                <input
                                    name="taskInput"
                                    type="text"
                                    defaultValue={task.name}
                                    autoFocus
                                />
                            </form>
                        </>
                    ) : (
                        <div className='taskitems' key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            <>
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => handleToggleComplete(task.id)}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        <button className='edit-btn' onClick={() => handleToggleEdit(task.id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default TaskList;
