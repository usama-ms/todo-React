import { useDispatch } from 'react-redux';
import { addTask } from 'src/todoSlice/TasksSlice.js';
export default function AddTaskInput() {

  const dispatch = useDispatch();

  const handleInputKeyPress = (event) => {
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
      <form onSubmit={handleInputKeyPress}>
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
