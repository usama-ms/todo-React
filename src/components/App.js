import { useState } from 'react';
import 'src/components/app.css';
import AddTaskInput from "src/components/AddTask/AddTask.js";
import TaskList from 'src/components/TaskList/TaskList.js';

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
