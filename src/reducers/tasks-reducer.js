import c from './../constants';

export default (state = TaskData, action) => {
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
    delete newState[action.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};

const TaskData = {
  0: {
    'taskDescription': 'Grill Meat',
    'taskPlannedStartDateTime': '2019-07-04T14:30:00'
  },
  1: {
    'taskDescription': 'Put Food Out',
    'taskPlannedStartDateTime': '2019-07-04T15:00:00'
  },
  2: {
    'taskDescription': 'Set Tables',
    'taskPlannedStartDateTime': '2019-04-21T08:00:00'
  },
  3: {
    'taskDescription': 'Make Quiches',
    'taskPlannedStartDateTime': '2019-04-21T09:00:00'
  },
  4: {
    'taskDescription': 'Put Cinnamon Rolls in Oven',
    'taskPlannedStartDateTime': '2019-04-21T09:30:00'
  },
  5: {
    'taskDescription': 'Bake Quiches',
    'taskPlannedStartDateTime': '2019-04-21T10:00:00'
  },
  6: {
    'taskDescription': 'Fry Bacon',
    'taskPlannedStartDateTime': '2019-04-21T10:30:00'
  },
  7: {
    'taskDescription': 'Make Bloody Marys',
    'taskPlannedStartDateTime': '2019-04-21T10:45:00'
  },
  8: {
    'taskDescription': 'Peel and Slice Potatoes',
    'taskPlannedStartDateTime': '2019-03-17T13:00:00'
  },
  9: {
    'taskDescription': 'Brine the Brisket',
    'taskPlannedStartDateTime': '2019-03-17T13:30:00'
  },
  10: {
    'taskDescription': 'Prepare Buffet Table',
    'taskPlannedStartDateTime': '2019-03-17T14:00:00'
  },
  11: {
    'taskDescription': 'Prepare Drink Table',
    'taskPlannedStartDateTime': '2019-03-17T15:00:00'
  },
  12: {
    'taskDescription': 'Put Corned Beef in Oven',
    'taskPlannedStartDateTime': '2019-03-17T16:00:00'
  },
  13: {
    'taskDescription': 'Put Scalloped Potatoes in Oven',
    'taskPlannedStartDateTime': '2019-03-17T16:30:00'
  },
  14: {
    'taskDescription': 'Put Brussels Sprouts in Oven',
    'taskPlannedStartDateTime': '2019-03-17T17:00:00'
  },
  15: {
    'taskDescription': 'Put Food Out',
    'taskPlannedStartDateTime': '2019-03-17T17:30:00'
  }
};
