import React from 'react';

const EditTaskButton = ({ taskId, setEditableTaskId, editableTaskId }) => {

    const handleToggleEdit = () => {
        setEditableTaskId(taskId === editableTaskId ? null : taskId);
    };

    return (
        <button className='edit-btn' onClick={handleToggleEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
    );
};

export default EditTaskButton;
