import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_FOOD:
    return action.foodId;
  default:
    return state;
  }
};
