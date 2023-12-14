import {takeEvery, put} from 'redux-saga/effects';
import { fetchTasksSuccess, fetchTasks } from 'src/todoSlice/TodoListSlice';

function* fetchTasksSaga() {
  try {
    const myFile = require('src/tasks.json')
    yield put(fetchTasksSuccess(myFile));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchTasks, fetchTasksSaga);
}
