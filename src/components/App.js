import 'src/components/app.css';
import AddTaskInput from "src/components/AddTask/AddTask.js";
import TaskList from 'src/components/TaskList/TaskList.js';

function App() {

  return (
    <div className="body">
      <div className="container">
        <AddTaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
