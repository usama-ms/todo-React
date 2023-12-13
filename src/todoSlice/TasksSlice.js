import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
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
      const taskId = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
