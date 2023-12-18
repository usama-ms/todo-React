import React, { useEffect } from 'react';

import 'src/components/app.css';
import ConnectedAddTaskInput from 'src/container/AddTask'
import ConnectedTaskList from 'src/container/TaskList';

function App( {fetchTasks} ) {

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="body">
      <div className="container">
        <ConnectedAddTaskInput />
        <ConnectedTaskList />
      </div>
    </div>
  );
}

export default App;
