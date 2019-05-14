import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
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
  case c.RECEIVE_EVENT: {
    newState = Object.assign({}, state);
    newState[action.id] = action.event;
    return newState;
  }
  default: {
    return state;
  }
  }
};
