import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { taskId, newName } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      );
    },
    toggleComplete: (state, action) => {
      const { taskId, isCompleted } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: isCompleted } : task
      );
    },
    fetchTasks: () => {
    },
    fetchTasksSuccess: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete, fetchTasksSuccess, fetchTasks } = todoListSlice.actions;
export default todoListSlice.reducer;
