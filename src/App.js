import { useState } from 'react';
import './App.css';
import AddTaskInput from "/Users/mergestackemployee/todo/src/components/addTaskInput";
import TaskList from '/Users/mergestackemployee/todo/src/components/tasksList.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <AddTaskInput
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TaskList tasks={tasks} onDelete={(taskId) => handleDeleteTask(taskId)} />
    </div>
  );
}

export default App;