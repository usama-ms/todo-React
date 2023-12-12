export default function AddTaskInput({
    tasks,
    setTasks,
    newTask,
    setNewTask,
}) {
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleInputKeyPress = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
            setNewTask("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInputKeyPress();
    };
    return (
        <div className="body">
            <div className="container">
                <h1>My Todo</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="add-todo-input"
                        placeholder="Input task name and then tab enter to add"
                        value={newTask}
                        onChange={handleInputChange}
                    />
                </form>
                <hr>
                </hr>
            </div>
        </div>
    )
}