import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, storeName } = action;

  switch (action.type) {
  case c.ADD_STORE: {
    newState = Object.assign({}, state, {
      [id]: {
        storeName: storeName
      }
    });
    return newState;
  }
  case c.EDIT_STORE: {
    const newStore = Object.assign({}, state[id], { storeName });
    newState = Object.assign({}, state, {
      [id]: newStore
    });
    return newState;
  }
  case c.DELETE_STORE: {
    newState = Object.assign({}, state);
    delete newState[action.store.id];
    return newState;
  }
  case c.RECEIVE_STORE: {
    newState = Object.assign({}, state);
    newState[action.store.id] = action.store;
    return newState;
  }
  case c.RECEIVE_DELETED_STORE: {
    newState = Object.assign({}, state);
    delete newState[action.storeId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
