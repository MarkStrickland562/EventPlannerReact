import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, inviteeName, inviteeEmailAddress } = action;

  switch (action.type) {
  case c.ADD_INVITEE: {
    newState = Object.assign({}, state, {
      [id]: {
        inviteeName: inviteeName,
        inviteeEmailAddress: inviteeEmailAddress
      }
    });
    return newState;
  }
  case c.EDIT_INVITEE: {
    const newInvitee = Object.assign(
      {},
      state[id],
      { inviteeName },
      { inviteeEmailAddress }
    );
    newState = Object.assign({}, state, {
      [id]: newInvitee
    });
    return newState;
  }
  case c.DELETE_INVITEE: {
    newState = Object.assign({}, state);
    delete newState[action.invitee.id];
    return newState;
  }
  case c.RECEIVE_INVITEE: {
    newState = Object.assign({}, state);
    newState[action.invitee.id] = action.invitee;
    return newState;
  }
  case c.RECEIVE_DELETED_INVITEE: {
    newState = Object.assign({}, state);
    delete newState[action.inviteeId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
