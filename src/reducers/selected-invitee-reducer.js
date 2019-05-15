import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_INVITEE:
    return action.inviteeId;
  default:
    return state;
  }
};
