import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchTasksSuccess, fetchTasks, addTask, editTask, deleteTask, toggleComplete } from 'src/components/TodoListSlice';
import todoApi from 'src/api/todoApi';

function* fetchTasksSaga() {
  try {
    const response = yield call(todoApi.getTasks);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    console.error('Error fetching tasks:', error.message, error.response);
  }
}

function* addTaskSaga(action) {
  try {
    yield call(todoApi.addTask, action.payload);
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

function* editTaskSaga(action) {
  try {
    yield call(todoApi.editTask, action.payload.taskId, { name: action.payload.newName });
  } catch (error) {
    console.error('Error editing task:', error);
  }
}

function* deleteTaskSaga(action) {
  try {
    yield call(todoApi.deleteTask, action.payload);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}
function* toggleCompleteSaga(action) {
  try {
    console.log(action.payload);
    yield call(todoApi.editTask, action.payload.taskId, { isCompleted: action.payload.isCompleted });
  } catch (error) {
    console.error('Error toggling task:', error);
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchTasks.type, fetchTasksSaga);
  yield takeEvery(addTask.type, addTaskSaga);
  yield takeEvery(editTask.type, editTaskSaga);
  yield takeEvery(deleteTask.type, deleteTaskSaga);
  yield takeEvery(toggleComplete.type, toggleCompleteSaga); 
}
