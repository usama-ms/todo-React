import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../todoSlice/TasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
