import countReducer from '@src/stores/reducers/count-slice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
