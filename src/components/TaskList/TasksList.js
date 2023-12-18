import React, { useState } from 'react';

import 'src/components/TaskList/taskList.css';
import ConnectedDeleteTask from 'src/container/DeleteTask'
import ConnectedCheckBox from 'src/container/ToggleComplete'
import EditTaskButton from 'src/components/EditTask/EditTask.js';

const TaskList = ({ editTask, tasks }) => {

    const [editableTaskId, setEditableTaskId] = useState(null);
    const editTaskHandler = (event) => {
        event.preventDefault();
        const newName = event.currentTarget.querySelector('input[name="taskInput"]').value;
        const taskId = parseInt(event.currentTarget.querySelector('input[name="taskInput"]').dataset.taskId);
        editTask({ taskId, newName });
        setEditableTaskId(null);
    };
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className='taskitems task-container'>
                    {editableTaskId === task.id ? (
                        <form onSubmit={editTaskHandler}>
                            <input name="taskInput" type="text" data-task-id={task.id} data-testid="taskInput"
                                defaultValue={task.name} autoFocus
                            />
                        </form>
                    ) : (
                        <div className='taskitems' key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            <>
                                <ConnectedCheckBox
                                    taskId={task.id}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <ConnectedDeleteTask taskId={task.id} />
                        <EditTaskButton
                            taskId={task.id}
                            setEditableTaskId={setEditableTaskId}
                            editableTaskId={editableTaskId}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList
