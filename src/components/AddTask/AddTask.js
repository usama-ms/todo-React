import { useForm } from "react-hook-form"

const AddTaskInput = ({ addTask }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitHandler = (data) => {
    const newTask = data.taskInput.trim();
    if (newTask !== "") {
      addTask({ id: Date.now(), name: newTask, isCompleted: false });
      reset();
    }
  };

  return (
    <>
      <h1>My Todo</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          {...register("taskInput", {
            maxLength: 5,
            required: true,
            pattern: /^[A-Za-z]{1,5}$/,
          })}
          aria-invalid={errors.taskInput ? "true" : "false"}
          className="add-todo-input"
          placeholder="Input task name and then tab enter to add"
        />
        {errors.taskInput && (
          <p>
            {errors.taskInput.type === "required"
              ? "This field is required."
              : "Input should contain only alphabetical characters, and length should not exceed 5."}
          </p>
        )}
      </form>
      <hr />
    </>
  );
}

export default AddTaskInput;
