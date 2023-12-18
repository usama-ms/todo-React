import { connect } from 'react-redux';

import { deleteTask } from 'src/todoSlice/TodoListSlice';
import DeleteTaskComponent from 'src/components/DeleteTask/DeleteTask';

const mapDispatchToProps = {
    deleteTask,
};

const DeleteTask = connect(null, mapDispatchToProps)(DeleteTaskComponent);

export default DeleteTask;
