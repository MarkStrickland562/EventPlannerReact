import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_FOOD:
    return action.foodId;
  default:
    return state;
  }
};
