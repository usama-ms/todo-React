import React from 'react';

const EditTaskButton = ({ onEdit, taskId, taskName }) => {

    return (
        <button className='edit-btn' onClick={() => onEdit(taskId, taskName)}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
    );
};

export default EditTaskButton;
