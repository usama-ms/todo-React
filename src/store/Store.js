import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from 'src/todoSlice/TodoListSlice.js';

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

export default store;
