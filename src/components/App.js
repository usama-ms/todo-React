import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'src/components/app.css';
import AddTask from 'src/components/AddTask/AddTask'
import TaskList from 'src/components/TaskList/TasksList';

const App = () => {

  const queryClient = new QueryClient();
  return (
    <div className="body">
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <AddTask />
          <TaskList />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
