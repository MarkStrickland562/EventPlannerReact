import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_EVENT:
    return action.eventId;
  default:
    return state;
  }
};
