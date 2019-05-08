import eventsReducer from './events-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterEvents: eventsReducer
});

export default rootReducer;
