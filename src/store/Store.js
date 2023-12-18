import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { sagaMiddleware, rootSaga } from 'src/store/SagaCreation';
import todoListReducer from 'src/todoSlice/TodoListSlice';

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
