import { connect } from "react-redux";

import App from "src/components/App";
import { fetchTasks } from 'src/todoSlice/TodoListSlice';

const mapStateToProps = (state) => ({
  Todos: state.todoList.tasks,
});

const mapDispatchToProps = {
  fetchTasks,
};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
