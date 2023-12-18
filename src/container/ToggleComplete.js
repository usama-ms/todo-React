import { connect } from 'react-redux';

import CheckBoxComponent from 'src/components/CheckBox/CheckBox';
import { toggleComplete } from 'src/todoSlice/TodoListSlice';

const mapStateToProps = (state) => ({
    tasks: state.todoList.tasks,
});
const mapDispatchToProps = {
    toggleComplete,
};

const CheckBox = connect(mapStateToProps, mapDispatchToProps)(CheckBoxComponent);

export default CheckBox;
