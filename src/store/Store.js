import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoListReducer from 'src/components/TodoListSlice';
import rootSaga from 'src/sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
