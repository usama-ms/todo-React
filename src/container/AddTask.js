import { connect } from "react-redux";

import { addTask } from 'src/todoSlice/TodoListSlice';
import AddTaskInput from "src/components/AddTask/AddTask";

const mapDispatchToProps = {
  addTask,
};
const AddTask = connect(null, mapDispatchToProps)(AddTaskInput);

export default AddTask;
