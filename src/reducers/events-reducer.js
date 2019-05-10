import c from './../constants';

export default (state = EventData, action) => {
  let newState;
  const { id, eventName, eventDate, eventLocation, menusId } = action;

  switch (action.type) {
  case c.ADD_EVENT: {
    newState = Object.assign({}, state, {
      [id]: {
        eventName: eventName,
        eventDate: eventDate,
        eventLocation: eventLocation,
        menusId: menusId
      }
    });
    return newState;
  }
  case c.EDIT_EVENT: {
    const newEvent = Object.assign(
      {},
      state[id],
      { eventName },
      { eventDate },
      { eventLocation },
      { menusId }
    );
    newState = Object.assign({}, state, {
      [id]: newEvent
    });
    return newState;
  }
  case c.DELETE_EVENT: {
    newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const EventData = {
  0: {
    eventName: 'July 5th BBQ',
    eventDate: '2019-07-04',
    eventLocation: 'Woodland Park',
    menusId: 0
  },
  1: {
    eventName: 'Easter Sunday Brunch',
    eventDate: '2019-04-21',
    eventLocation: 'Casa de Marco',
    menusId: 1
  },
  2: {
    eventName: 'St. Patricks Day Party',
    eventDate: '2019-03-17',
    eventLocation: 'Claras House',
    menusId: 2
  }
};
