import c from './../constants';

export default (state = MenuData, action) => {
  let newState;
  const { id, menuTheme } = action;

  switch (action.type) {
  case c.ADD_MENU: {
    newState = Object.assign({}, state, {
      [id]: {
        menuTheme: menuTheme
      }
    });
    return newState;
  }
  case c.EDIT_MENU: {
    const newMenu = Object.assign(
      {},
      state[id],
      { menuTheme }
    );
    newState = Object.assign({}, state, {
      [id]: newMenu
    });
    return newState;
  }
  case c.DELETE_MENU: {
    newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const MenuData = {
  0: {
    'menuTheme': 'Summer BBQ'
  },
  1: {
    'menuTheme': 'Boozy Brunch'
  },
  2: {
    'menuTheme': 'Green Food or Potato Dishes'
  }
};
