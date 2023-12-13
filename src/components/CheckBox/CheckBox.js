import React from 'react';

const Checkbox = ({ setTasks, taskId }) => {
    const handleToggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };
    return (
        <input type="checkbox" checked={taskId.isCompleted}
            onChange={() => handleToggleComplete(taskId)}
        />
    );
};

export default Checkbox;
