import eventsReducer from './events-reducer';
import selectedEventReducer from './selected-event-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterEvents: eventsReducer,
  selectedEvent: selectedEventReducer
});

export default rootReducer;
