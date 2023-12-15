import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'src/components/TaskList/taskList.css';
import { editTask } from 'src/components/TodoListSlice';
import DeleteTaskButton from 'src/components/DeleteTask/DeleteTask.js';
import EditTaskButton from 'src/components/EditTask/EditTask.js';
import Checkbox from 'src/components/CheckBox/CheckBox.js';

const TaskList = () => {

    const tasks = useSelector((state) => state.todoList.tasks);
    const dispatch = useDispatch();
    const [editableTaskId, setEditableTaskId] = useState(null);

    const editTaskHandler = (event) => {
        event.preventDefault();
        const newName = event.currentTarget.querySelector('input[name="taskInput"]').value;
        const taskId = parseInt(event.currentTarget.querySelector('input[name="taskInput"]').dataset.taskId);
        dispatch(editTask({ taskId, newName }));
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
                                <Checkbox
                                    taskId={task.id}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <DeleteTaskButton taskId={task.id} />
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