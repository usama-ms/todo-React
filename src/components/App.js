import { useState } from 'react';
import '../components/app.css';
import AddTaskInput from "./AddTask/AddTask.js";
import TaskList from './TaskList/TasksList.js';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="body">
      <div className="container">
        <AddTaskInput setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
