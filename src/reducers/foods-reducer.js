import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, ingredientDescription, dishId, storeId } = action;

  switch (action.type) {
  case c.ADD_FOOD: {
    newState = Object.assign({}, state, {
      [id]: {
        ingredientDescription: ingredientDescription,
        menuItemsId: dishId,
        storeId: storeId
      }
    });
    return newState;
  }
  case c.EDIT_FOOD: {
    const newFood = Object.assign(
      {},
      state[id],
      { ingredientDescription },
      { menuItemsId: dishId },
      { storeId }
    );
    newState = Object.assign({}, state, {
      [id]: newFood
    });
    return newState;
  }
  case c.DELETE_FOOD: {
    newState = Object.assign({}, state);
    delete newState[action.food.id];
    return newState;
  }
  case c.RECEIVE_FOOD: {
    newState = Object.assign({}, state);
    newState[action.food.id] = action.food;
    return newState;
  }
  case c.RECEIVE_DELETED_FOOD: {
    newState = Object.assign({}, state);
    delete newState[action.foodId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
