import c from './../constants';

export default (state = FoodData, action) => {
  let newState;
  const { id, ingredientDescription, menuItemsId, storeId } = action;

  switch (action.type) {
  case c.ADD_FOOD: {
    newState = Object.assign({}, state, {
      [id]: {
        ingredientDescription: ingredientDescription,
        menuItemsId: menuItemsId,
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
      { menuItemsId },
      { storeId }
    );
    newState = Object.assign({}, state, {
      [id]: newFood
    });
    return newState;
  }
  case c.DELETE_FOOD: {
    newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const FoodData = {
  0: {
    'ingredientDescription': 'Ground Beef, 10#',
    'menuItemsId': '0',
    'storeId': '1'
  },
  1: {
    'ingredientDescription': 'Hot Dogs, 3-Dozen',
    'menuItemsId': '1',
    'storeId': '1'
  },
  2: {
    'ingredientDescription': 'Baked Beans, #10 Can',
    'menuItemsId': '2',
    'storeId': '1'
  },
  3: {
    'ingredientDescription': 'Potato Chips, 2 Large Bags',
    'menuItemsId': '1',
    'storeId': '0'
  },
  4: {
    'ingredientDescription': 'Cole Slaw, 1 Tub',
    'menuItemsId': '4',
    'storeId': '0'
  },
  5: {
    'ingredientDescription': 'Hamburger Buns, 3-Dozen',
    'menuItemsId': '0',
    'storeId': '3'
  },
  6: {
    'ingredientDescription': 'Hot Dog Buns, 3-Dozen',
    'menuItemsId': '1',
    'storeId': '3'
  },
  7: {
    'ingredientDescription': 'Tea Bags, Lipton, 1 Box',
    'menuItemsId': '5',
    'storeId': '3'
  },
  8: {
    'ingredientDescription': 'Ketchup, Mayonnaise, Mustard, Relish',
    'menuItemsId': '17',
    'storeId': '2'
  },
  9: {
    'ingredientDescription': 'Bacon, 4#',
    'menuItemsId': '1',
    'storeId': '0'
  },
  10: {
    'ingredientDescription': 'Eggs, 2-Dozen',
    'menuItemsId': '1',
    'storeId': '4'
  },
  11: {
    'ingredientDescription': 'Heavy Cream, 1-Quart',
    'menuItemsId': '1',
    'storeId': '3'
  },
  12: {
    'ingredientDescription': 'Pie Shells, 4',
    'menuItemsId': '1',
    'storeId': '3'
  },
  13: {
    'ingredientDescription': 'Potatoes, 5# Bag',
    'menuItemsId': '1',
    'storeId': '2'
  },
  14: {
    'ingredientDescription': 'Butter, 1#',
    'menuItemsId': '1',
    'storeId': '4'
  },
  15: {
    'ingredientDescription': 'Fruit Assortment, 2 Tubs',
    'menuItemsId': '1',
    'storeId': '0'
  },
  16: {
    'ingredientDescription': 'Cinnamon Rolls, 4 Cans',
    'menuItemsId': '1',
    'storeId': '3'
  },
  17: {
    'ingredientDescription': 'Bloody Mary Mix, 2 Bottles',
    'menuItemsId': '1',
    'storeId': '1'
  },
  18: {
    'ingredientDescription': 'Vodka, 2-Litres',
    'menuItemsId': '1',
    'storeId': '3'
  },
  19: {
    'ingredientDescription': 'Beef Brisket, 5#',
    'menuItemsId': '2',
    'storeId': '1'
  },
  20: {
    'ingredientDescription': 'Corned Beef Spices',
    'menuItemsId': '2',
    'storeId': '3'
  },
  21: {
    'ingredientDescription': 'Red Potatoes, 5#',
    'menuItemsId': '2',
    'storeId': '2'
  },
  22: {
    'ingredientDescription': '1/2 and 1/2, 2-Quarts',
    'menuItemsId': '2',
    'storeId': '1'
  },
  23: {
    'ingredientDescription': 'Brussels Sprouts, Frozen, 2#',
    'menuItemsId': '2',
    'storeId': '3'
  },
  24: {
    'ingredientDescription': 'Soda Bread, 2-Dozen Pieces',
    'menuItemsId': '2',
    'storeId': '4'
  },
  25: {
    'ingredientDescription': 'Irish Whiskey, 2-Litres',
    'menuItemsId': '2',
    'storeId': '0'
  }
};
