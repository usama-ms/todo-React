import { connect } from 'react-redux';

import { deleteTask } from 'src/todoSlice/TodoListSlice';
import DeleteTask from 'src/components/DeleteTask/DeleteTask';

const mapStateToProps = (state) => ({
    tasks: state.todoList.tasks,
});
const mapDispatchToProps = {
    deleteTask,
};

const ConnectedDeleteTask = connect(mapStateToProps, mapDispatchToProps)(DeleteTask);

export default ConnectedDeleteTask;
