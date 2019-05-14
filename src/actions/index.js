import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const events = firebase.database().ref('events');

export function addEvent(_eventName, _eventDate, _eventLocation, _menusId) {
  return () => events.push({
    eventName: _eventName,
    eventDate: _eventDate,
    eventLocation: _eventLocation,
    menusId: _menusId
  });
}

export function watchFirebaseEventsRef() {
  return function(dispatch) {
    events.on('child_added', data => {
      const newEvent = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveEvent(newEvent));
    });
  };
}

function receiveEvent(eventFromFirebase) {
  return {
    type: c.RECEIVE_EVENT,
    event: eventFromFirebase
  };
}
