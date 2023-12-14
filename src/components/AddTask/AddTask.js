import { useDispatch } from 'react-redux';
import { addTask } from 'src/todoSlice/TodoListSlice.js';

const AddTaskInput = () => {

  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTask = event.target.elements.taskInput.value.trim();
    if (newTask !== "") {
      dispatch(addTask({ id: Date.now(), name: newTask, isCompleted: false }));
      event.target.elements.taskInput.value = '';
    }
  };

  return (
    <>
      <h1>My Todo</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          name="taskInput"
          className="add-todo-input"
          placeholder="Input task name and then tab enter to add"
        />
      </form>
      <hr />
    </>
  );
}

export default AddTaskInput;
