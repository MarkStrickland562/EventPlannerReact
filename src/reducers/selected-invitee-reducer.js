import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_INVITEE:
    return action.inviteeId;
  default:
    return state;
  }
};
