import c from './../constants';

export default (state = StoreData, action) => {
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
    const newStore = Object.assign(
      {},
      state[id],
      { storeName }
    );
    newState = Object.assign({}, state, {
      [id]: newStore
    });
    return newState;
  }
  case c.DELETE_STORE: {
    newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const StoreData = {
  0: {
    'storeName': 'Costco'
  },
  1: {
    'storeName': 'Cash & Carry'
  },
  2: {
    'storeName': 'Grocery Outlet'
  },
  3: {
    'storeName': 'QFC'
  },
  4: {
    'storeName': 'Trader Joe\'s'
  }
};
