import { connect } from 'react-redux';

import CheckBox from 'src/components/CheckBox/CheckBox';
import { toggleComplete } from 'src/todoSlice/TodoListSlice';

const mapStateToProps = (state) => ({
    tasks: state.todoList.tasks,
});
const mapDispatchToProps = {
    toggleComplete,
};

const ConnectedCheckBox = connect(mapStateToProps, mapDispatchToProps)(CheckBox);

export default ConnectedCheckBox;
