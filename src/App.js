import { useState } from 'react';
import './App.css';
import AddTaskInput from "/Users/mergestackemployee/todo/src/components/addTaskInput";
import TaskList from '/Users/mergestackemployee/todo/src/components/tasksList.js';


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
