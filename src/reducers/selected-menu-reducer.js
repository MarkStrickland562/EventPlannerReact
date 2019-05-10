import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_MENU:
    return action.menuId;
  default:
    return state;
  }
};
