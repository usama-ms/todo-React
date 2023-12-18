import { connect } from 'react-redux';

import TaskListComponent from 'src/components/TaskList/TasksList';
import { editTask } from 'src/todoSlice/TodoListSlice';
import { fetchTasks } from 'src/todoSlice/TodoListSlice';

const mapStateToProps = (state) => ({
    tasks: state.todoList.tasks,
});
const mapDispatchToProps = {
    editTask,fetchTasks
};

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);

export default TaskList;
