import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import 'src/components/TaskList/taskList.css';
import {editTask} from 'src/api/todoApi';
import DeleteTask from 'src/components/DeleteTask/DeleteTask'
import CheckBox from 'src/components/CheckBox/CheckBox'
import EditTaskButton from 'src/components/EditTask/EditTask.js';
import { useTasksState, todoStateController } from 'src/store/todoController.js';

const TaskList = () => {
    const tasksSate = useTasksState();
    const queryClient = useQueryClient();

    useQuery('getTasks', todoApi.getTasks, {
        onSuccess: (data) => {
            todoStateController.setTasks(data);
        },
    });

    const [editableTaskId, setEditableTaskId] = useState(null);

    const editTaskMutation = useMutation(editTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTasks');
        },
    });

    const editTaskHandler = (event) => {
        event.preventDefault();
        const newName = event.currentTarget.querySelector('input[name="taskInput"]').value;
        const taskId = parseInt(event.currentTarget.querySelector('input[name="taskInput"]').dataset.taskId);
        editTaskMutation.mutate({
            taskId: taskId,
            updatedTask: { name: newName }
        });
        setEditableTaskId(null);
    };
    const { tasks } = tasksSate.get();

    return (
        <div>
            {tasks?.map((task) => (
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
                                <CheckBox tasks={tasks}
                                    taskId={task.id}
                                />
                                <p>{task.name}</p>
                            </>
                        </div>
                    )}
                    <div className='btns-container'>
                        <DeleteTask taskId={task.id} />
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
