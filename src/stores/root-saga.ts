import { all } from 'redux-saga/effects';

import countSaga from '@src/stores/sagas/count-saga';

export default function* rootSaga() {
  yield all([countSaga()]);
}
