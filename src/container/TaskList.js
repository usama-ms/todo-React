import { connect } from 'react-redux';

import TaskList from 'src/components/TaskList/TasksList';
import { editTask } from 'src/todoSlice/TodoListSlice';

const mapStateToProps = (state) => ({
    tasks: state.todoList.tasks,
});
const mapDispatchToProps = {
    editTask
};

const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default ConnectedTaskList;
