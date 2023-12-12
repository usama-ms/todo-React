import { useState } from 'react';
import '/Users/mergestackemployee/todo/src/components/App.css';
import AddTaskInput from "./AddTask/addTask.js";
import TaskList from '/Users/mergestackemployee/todo/src/components/TaskList/tasksList.js';


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
