import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, taskDescription, taskPlannedStartDateTime } = action;

  switch (action.type) {
  case c.ADD_TASK: {
    newState = Object.assign({}, state, {
      [id]: {
        taskDescription: taskDescription,
        taskPlannedStartDateTime: taskPlannedStartDateTime
      }
    });
    return newState;
  }
  case c.EDIT_TASK: {
    const newTask = Object.assign(
      {},
      state[id],
      { taskDescription },
      { taskPlannedStartDateTime }
    );
    newState = Object.assign({}, state, {
      [id]: newTask
    });
    return newState;
  }
  case c.DELETE_TASK: {
    newState = Object.assign({}, state);
    delete newState[action.task.id];
    return newState;
  }
  case c.RECEIVE_TASK: {
    newState = Object.assign({}, state);
    newState[action.task.id] = action.task;
    return newState;
  }
  case c.RECEIVE_DELETED_TASK: {
    newState = Object.assign({}, state);
    delete newState[action.taskId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
