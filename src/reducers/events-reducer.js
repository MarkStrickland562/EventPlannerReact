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

export default (state = EventData, action) => {
  switch (action.type) {
  case 'ADD_EVENT':
    const { id, eventName, eventDate, eventLocation, menusId } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        eventName: eventName,
        eventDate: eventDate,
        eventLocation: eventLocation,
        menusId: menusId
      }
    });
    return newState;
  default:
    return state;
  }
};
