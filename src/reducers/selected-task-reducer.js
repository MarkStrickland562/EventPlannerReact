import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_TASK:
    return action.taskId;
  default:
    return state;
  }
};
