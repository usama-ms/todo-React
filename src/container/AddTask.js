import { connect } from "react-redux";

import { addTask } from 'src/todoSlice/TodoListSlice';
import AddTaskInput from "src/components/AddTask/AddTask";

const mapStateToProps = (state) => ({
  Todos: state.todoList.tasks,
});

const mapDispatchToProps = {
  addTask,
};
const ConnectedAddTaskInput = connect(mapStateToProps, mapDispatchToProps)(AddTaskInput);

export default ConnectedAddTaskInput;
