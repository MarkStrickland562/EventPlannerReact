import c from './../constants';

export default (state = InviteeData, action) => {
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
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const InviteeData = {
  0: {
    'inviteeName': 'Mark Strickland',
    'inviteeEmailAddress': 'markstrickland562@hotmail.com'
  },
  1: {
    'inviteeName': 'Clara Munro',
    'inviteeEmailAddress': 'clarajmunro@gmail.com'
  },
  2: {
    'inviteeName': 'Shawn Lunsford',
    'inviteeEmailAddress': 'lunsford.sk@gmail.com'
  },
  3: {
    'inviteeName': 'Micaela Jawor',
    'inviteeEmailAddress': 'micaelajawor@yahoo.com'
  }
};
