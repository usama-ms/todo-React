import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from 'src/todoSlice/TasksSlice.js';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
