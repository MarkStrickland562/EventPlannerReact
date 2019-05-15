import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_STORE:
    return action.storeId;
  default:
    return state;
  }
};
