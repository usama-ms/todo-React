import rootSaga from 'src/sagas/Sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export { sagaMiddleware, rootSaga };
