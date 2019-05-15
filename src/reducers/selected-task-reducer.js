import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_TASK:
    return action.taskId;
  default:
    return state;
  }
};
