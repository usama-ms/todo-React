import { useState } from "react";
import AddTaskInput from "/Users/mergestackemployee/todo/src/components/addTaskInput.js";

export default function CreateTask() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter' && newTask.trim() !== '') {
            setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
            setNewTask('');
        }
    };
    const onKeyPressHandler = (e) => {
        e.preventDefault();
        if (e.key == 13) {
            console.log("key pressed")
            handleInputKeyPress();
        }
    };
    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };
    return (
        <AddTaskInput
            handleInputChange={handleInputChange}
            onKeyPressHandler={onKeyPressHandler}
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            newTask={newTask}
        />
    );
}