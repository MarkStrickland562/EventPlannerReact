import c from './../constants';

export default (state = DishData, action) => {
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
    const newDish = Object.assign(
      {},
      state[id],
      { menuItemDescription }
    );
    newState = Object.assign({}, state, {
      [id]: newDish
    });
    return newState;
  }
  case c.DELETE_DISH: {
    newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const DishData = {
  0: {
    'menuItemDescription': 'Burgers'
  },
  1: {
    'menuItemDescription': 'Hot Dogs'
  },
  2: {
    'menuItemDescription': 'Potato Chips'
  },
  3: {
    'menuItemDescription': 'Baked Beans'
  },
  4: {
    'menuItemDescription': 'Cole Slaw'
  },
  5: {
    'menuItemDescription': 'Iced Tea'
  },
  6: {
    'menuItemDescription': 'Bacon'
  },
  7: {
    'menuItemDescription': 'Quiche Lorraine'
  },
  8: {
    'menuItemDescription': 'Hash Browns'
  },
  9: {
    'menuItemDescription': 'Fruit Salad'
  },
  10: {
    'menuItemDescription': 'Cinnamon Rolls'
  },
  11: {
    'menuItemDescription': 'Bloody Marys'
  },
  12: {
    'menuItemDescription': 'Corned Beef'
  },
  13: {
    'menuItemDescription': 'Scalloped Potatoes'
  },
  14: {
    'menuItemDescription': 'Brussels Sprouts'
  },
  15: {
    'menuItemDescription': 'Soda Bread'
  },
  16: {
    'menuItemDescription': 'Irish Whiskey'
  },
  17: {
    'menuItemDescription': 'Condiments'
  }
};
