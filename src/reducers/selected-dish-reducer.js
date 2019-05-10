import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_DISH:
    return action.dishId;
  default:
    return state;
  }
};
