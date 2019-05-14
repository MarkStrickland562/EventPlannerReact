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

export function editEvent(_id, _eventName, _eventDate, _eventLocation, _menusId) {
  var eventToUpdate = firebase.database().ref('events/' + _id);
  return () => eventToUpdate.update({
    eventName: _eventName,
    eventDate: _eventDate,
    eventLocation: _eventLocation,
    menusId: _menusId
  });
}

export function deleteEvent(_id) {
  var eventToDelete = firebase.database().ref('events/' + _id);
  return () => eventToDelete.remove();
}

export function watchFirebaseEventsRef() {
  return function(dispatch) {
    events.on('child_added', data => {
      const newEvent = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveEvent(newEvent));
    });
    events.on('child_changed', data => {
      const updatedEvent = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveEvent(updatedEvent));
    });
    events.on('child_removed', data => {
      dispatch(receiveDeletedEvent(data.getKey()));
    });
  };
}

function receiveEvent(eventFromFirebase) {
  return {
    type: c.RECEIVE_EVENT,
    event: eventFromFirebase
  };
}

function receiveDeletedEvent(eventId) {
  return {
    type: c.RECEIVE_EVENT,
    eventId: eventId
  };
}
