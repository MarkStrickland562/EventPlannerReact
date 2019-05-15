import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, menuItemDescription } = action;

  switch (action.type) {
  case c.ADD_DISH: {
    newState = Object.assign({}, state, {
      [id]: {
        menuItemDescription: menuItemDescription
      }
    });
    return newState;
  }
  case c.EDIT_DISH: {
    const newDish = Object.assign({}, state[id], { menuItemDescription });
    newState = Object.assign({}, state, {
      [id]: newDish
    });
    return newState;
  }
  case c.DELETE_DISH: {
    newState = Object.assign({}, state);
    delete newState[action.dish.id];
    return newState;
  }
  case c.RECEIVE_DISH: {
    newState = Object.assign({}, state);
    newState[action.dish.id] = action.dish;
    return newState;
  }
  case c.RECEIVE_DELETED_DISH: {
    newState = Object.assign({}, state);
    delete newState[action.dishId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
