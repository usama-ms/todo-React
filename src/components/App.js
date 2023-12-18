import React, { useEffect } from 'react';

import 'src/components/app.css';
import AddTask from 'src/container/AddTask'
import TaskList from 'src/container/TaskList';

const App = () => {

  return (
    <div className="body">
      <div className="container">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
