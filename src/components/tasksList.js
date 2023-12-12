import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
    if (!tasks) {
        return null;
    }
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <p>{task.name}</p>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
