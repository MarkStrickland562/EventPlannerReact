import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
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
    const newMenu = Object.assign({}, state[id], { menuTheme });
    newState = Object.assign({}, state, {
      [id]: newMenu
    });
    return newState;
  }
  case c.DELETE_MENU: {
    newState = Object.assign({}, state);
    delete newState[action.menu.id];
    return newState;
  }
  case c.RECEIVE_MENU: {
    newState = Object.assign({}, state);
    newState[action.menu.id] = action.menu;
    return newState;
  }
  case c.RECEIVE_DELETED_MENU: {
    newState = Object.assign({}, state);
    delete newState[action.menuId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
