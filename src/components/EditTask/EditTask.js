import React from 'react';

const EditTaskButton = ({ onEdit, taskId, taskName, setEditableTaskId, editableTaskId }) => {

    const handleToggleEdit = () => {
        setEditableTaskId(taskId === editableTaskId ? null : taskId);
    };

    return (
        <button className='edit-btn' onClick={() => { onEdit(taskId, taskName); handleToggleEdit(); }}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
    );
};

export default EditTaskButton;
