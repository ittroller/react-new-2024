import { countActionUp, countActionDown, countAction } from '@src/stores/reducers/count-slice';
import { takeLatest, put } from 'redux-saga/effects';

function* countFunc() {
  try {
    yield put(countActionUp(1));
  } catch (error) {
    yield put(countActionDown(1));
  }
}

function* countSaga() {
  yield takeLatest(countAction.type, countFunc);
}

export default countSaga;
