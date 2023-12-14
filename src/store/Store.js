import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from 'src/todoSlice/TodoListSlice';

const store = configureStore({
  
  reducer: {
    todoList: todoListReducer,
  },
});

export default store;
