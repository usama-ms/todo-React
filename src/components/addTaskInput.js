import TaskList from "/Users/mergestackemployee/todo/src/components/tasksList.js";

export default function AddTaskInput({ handleInputChange,  onKeyPressHandler, tasks, handleDeleteTask, newTask }) {
    
    return (
        <div className="body">
            <div className="container">
                <h1>My Todo</h1>
                <input
                    className="add-todo-input"
                    placeholder="Input task name and then tab enter to add"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={onKeyPressHandler}
                >
                </input>
                <TaskList tasks={tasks} onDelete={handleDeleteTask} />
                <hr>
                </hr>
            </div>
        </div>
    )
}