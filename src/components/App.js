import React, { useEffect } from 'react';
import 'src/components/app.css';
import AddTaskInput from "src/components/AddTask/AddTask.js";
import TaskList from 'src/components/TaskList/TasksList.js';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'src/components/TodoListSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

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
