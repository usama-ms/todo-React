import { connect } from "react-redux";

import { addTask } from 'src/todoSlice/TodoListSlice';
import AddTaskInput from "src/components/AddTask/AddTask";

const mapStateToProps = (state) => ({
  tasks: state.todoList.tasks,
});

const mapDispatchToProps = {
  addTask,
};
const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskInput);

export default AddTask;
