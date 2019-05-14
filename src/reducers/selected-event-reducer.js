import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_EVENT:
    return action.eventId;
  default:
    return state;
  }
};
