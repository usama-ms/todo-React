import { useForm } from "react-hook-form"

import 'src/components/AddTask/addTask.css';

const AddTaskInput = ({ addTask, tasks }) => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitHandler = (data) => {
    const newTask = data.taskInput.trim();
    const isDuplicate = tasks.some(task => task.name === newTask);
    if (newTask !== "" && !isDuplicate) {
      addTask({ id: Date.now(), name: newTask, isCompleted: false });
      reset();
    } else if (isDuplicate) {
      setError("taskInput", {
        type: "existing",
        message: "Duplicate task name. Please enter a unique task name.",
      });
    }
  };


  return (
    <>
      <h1>My Todo</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          {...register("taskInput", {
            maxLength: 50,
            required: true,
            pattern: /^[A-Za-z0-9" "]{1,50}$/,
          })}
          aria-invalid={errors.taskInput ? "true" : "false"}
          className="add-todo-input"
          placeholder="Input task name and then tab enter to add"
        />
        {errors.taskInput && (
          <p className="error-message">
            {errors.taskInput.type === "required"
              ? "This field is required."
              : errors.taskInput.type === "existing"
                ? errors.taskInput.message
                : "Input length should not exceed 50."}
          </p>
        )}
      </form>
      <hr />
    </>
  );
}

export default AddTaskInput;
