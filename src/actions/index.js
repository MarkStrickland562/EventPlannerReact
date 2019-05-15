import constants from './../constants';
const { firebaseConfig, c } = constants;

/*eslint-disable */
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const events = firebase.database().ref('events');
const menus = firebase.database().ref('menus');
const dishes = firebase.database().ref('menuItems');
const foods = firebase.database().ref('menuItemIngredients');
const stores = firebase.database().ref('stores');
const tasks = firebase.database().ref('tasks');
const invitees = firebase.database().ref('invitees');
/*eslint-enable */

export function addEvent(_eventName, _eventDate, _eventLocation, _menusId) {
  return () =>
    events.push({
      eventName: _eventName,
      eventDate: _eventDate,
      eventLocation: _eventLocation,
      menusId: _menusId
    });
}

export function editEvent(
  _id,
  _eventName,
  _eventDate,
  _eventLocation,
  _menusId
) {
  /*eslint-disable */
  var eventToUpdate = firebase.database().ref('events/' + _id);
  /*eslint-enable */
  return () =>
    eventToUpdate.update({
      eventName: _eventName,
      eventDate: _eventDate,
      eventLocation: _eventLocation,
      menusId: _menusId
    });
}

export function deleteEvent(_id) {
  /*eslint-disable */
  var eventToDelete = firebase.database().ref('events/' + _id);
  /*eslint-enable */
  return () => eventToDelete.remove();
}

export function watchFirebaseEventsRef() {
  return function(dispatch) {
    events.on('child_added', data => {
      const newEvent = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveEvent(newEvent));
    });
    events.on('child_changed', data => {
      const updatedEvent = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveEvent(updatedEvent));
    });
    events.on('child_removed', data => {
      dispatch(receiveDeletedEvent(data.getKey()));
    });
  };
}

function receiveEvent(eventFromFirebase) {
  return {
    type: c.RECEIVE_EVENT,
    event: eventFromFirebase
  };
}

function receiveDeletedEvent(eventId) {
  return {
    type: c.RECEIVE_DELETED_EVENT,
    eventId: eventId
  };
}

export function addDish(_menuItemDescription) {
  return () =>
    dishes.push({
      menuItemDescription: _menuItemDescription
    });
}

export function editDish(_id, _menuItemDescription) {
  /*eslint-disable */
  var dishToUpdate = firebase.database().ref('menuItems/' + _id);
  /*eslint-enable */
  return () =>
    dishToUpdate.update({
      menuItemDescription: _menuItemDescription
    });
}

export function deleteDish(_id) {
  /*eslint-disable */
  var dishToDelete = firebase.database().ref('menuItems/' + _id);
  /*eslint-enable */
  return () => dishToDelete.remove();
}

export function watchFirebaseDishesRef() {
  return function(dispatch) {
    dishes.on('child_added', data => {
      const newDish = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveDish(newDish));
    });
    dishes.on('child_changed', data => {
      const updatedDish = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveDish(updatedDish));
    });
    dishes.on('child_removed', data => {
      dispatch(receiveDeletedDish(data.getKey()));
    });
  };
}

function receiveDish(dishFromFirebase) {
  return {
    type: c.RECEIVE_DISH,
    dish: dishFromFirebase
  };
}

function receiveDeletedDish(dishId) {
  return {
    type: c.RECEIVE_DELETED_DISH,
    dishId: dishId
  };
}

export function addFood(_ingredientDescription, _menuItemsId, _storeId) {
  return () =>
    foods.push({
      ingredientDescription: _ingredientDescription,
      menuItemsId: _menuItemsId,
      storeId: _storeId
    });
}

export function editFood(_id, _ingredientDescription, _menuItemsId, _storeId) {
  /*eslint-disable */
  var foodToUpdate = firebase.database().ref('menuItemIngredients/' + _id);
  /*eslint-enable */
  return () =>
    foodToUpdate.update({
      ingredientDescription: _ingredientDescription,
      menuItemsId: _menuItemsId,
      storeId: _storeId
    });
}

export function deleteFood(_id) {
  /*eslint-disable */
  var foodToDelete = firebase.database().ref('menuItemIngredients/' + _id);
  /*eslint-enable */
  return () => foodToDelete.remove();
}

export function watchFirebaseFoodsRef() {
  return function(dispatch) {
    foods.on('child_added', data => {
      const newFood = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveFood(newFood));
    });
    foods.on('child_changed', data => {
      const updatedFood = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveFood(updatedFood));
    });
    foods.on('child_removed', data => {
      dispatch(receiveDeletedFood(data.getKey()));
    });
  };
}

function receiveFood(foodFromFirebase) {
  return {
    type: c.RECEIVE_FOOD,
    food: foodFromFirebase
  };
}

function receiveDeletedFood(foodId) {
  return {
    type: c.RECEIVE_DELETED_FOOD,
    foodId: foodId
  };
}

export function addInvitee(_inviteeName, _inviteeEmailAddress) {
  return () =>
    invitees.push({
      inviteeName: _inviteeName,
      inviteeEmailAddress: _inviteeEmailAddress
    });
}

export function editInvitee(_id, _inviteeName, _inviteeEmailAddress) {
  /*eslint-disable */
  var inviteeToUpdate = firebase.database().ref('invitees/' + _id);
  /*eslint-enable */
  return () =>
    inviteeToUpdate.update({
      inviteeName: _inviteeName,
      inviteeEmailAddress: _inviteeEmailAddress
    });
}

export function deleteInvitee(_id) {
  /*eslint-disable */
  var inviteeToDelete = firebase.database().ref('invitees/' + _id);
  /*eslint-enable */
  return () => inviteeToDelete.remove();
}

export function watchFirebaseInviteesRef() {
  return function(dispatch) {
    invitees.on('child_added', data => {
      const newInvitee = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveInvitee(newInvitee));
    });
    invitees.on('child_changed', data => {
      const updatedInvitee = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveInvitee(updatedInvitee));
    });
    invitees.on('child_removed', data => {
      dispatch(receiveDeletedInvitee(data.getKey()));
    });
  };
}

function receiveInvitee(inviteeFromFirebase) {
  return {
    type: c.RECEIVE_INVITEE,
    invitee: inviteeFromFirebase
  };
}

function receiveDeletedInvitee(inviteeId) {
  return {
    type: c.RECEIVE_DELETED_INVITEE,
    inviteeId: inviteeId
  };
}

export function addMenu(_menuTheme) {
  return () =>
    menus.push({
      menuTheme: _menuTheme
    });
}

export function editMenu(_id, _menuTheme) {
  /*eslint-disable */
  var menuToUpdate = firebase.database().ref('menus/' + _id);
  /*eslint-enable */
  return () =>
    menuToUpdate.update({
      menuTheme: _menuTheme
    });
}

export function deleteMenu(_id) {
  /*eslint-disable */
  var menuToDelete = firebase.database().ref('menus/' + _id);
  /*eslint-enable */
  return () => menuToDelete.remove();
}

export function watchFirebaseMenusRef() {
  return function(dispatch) {
    menus.on('child_added', data => {
      const newMenu = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveMenu(newMenu));
    });
    menus.on('child_changed', data => {
      const updatedMenu = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveMenu(updatedMenu));
    });
    menus.on('child_removed', data => {
      dispatch(receiveDeletedMenu(data.getKey()));
    });
  };
}

function receiveMenu(menuFromFirebase) {
  return {
    type: c.RECEIVE_MENU,
    menu: menuFromFirebase
  };
}

function receiveDeletedMenu(menuId) {
  return {
    type: c.RECEIVE_DELETED_MENU,
    menuId: menuId
  };
}

export function addStore(_storeName) {
  return () =>
    stores.push({
      storeName: _storeName
    });
}

export function editStore(_id, _storeName) {
  /*eslint-disable */
  var storeToUpdate = firebase.database().ref('stores/' + _id);
  /*eslint-enable */
  return () =>
    storeToUpdate.update({
      storeName: _storeName
    });
}

export function deleteStore(_id) {
  /*eslint-disable */
  var storeToDelete = firebase.database().ref('stores/' + _id);
  /*eslint-enable */
  return () => storeToDelete.remove();
}

export function watchFirebaseStoresRef() {
  return function(dispatch) {
    stores.on('child_added', data => {
      const newStore = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveStore(newStore));
    });
    stores.on('child_changed', data => {
      const updatedStore = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveStore(updatedStore));
    });
    stores.on('child_removed', data => {
      dispatch(receiveDeletedStore(data.getKey()));
    });
  };
}

function receiveStore(storeFromFirebase) {
  return {
    type: c.RECEIVE_STORE,
    store: storeFromFirebase
  };
}

function receiveDeletedStore(storeId) {
  return {
    type: c.RECEIVE_DELETED_STORE,
    storeId: storeId
  };
}

export function addTask(_taskDescription, _taskPlannedStartDateTime) {
  return () =>
    tasks.push({
      taskDescription: _taskDescription,
      taskPlannedStartDateTime: _taskPlannedStartDateTime
    });
}

export function editTask(_id, _taskDescription, _taskPlannedStartDateTime) {
  /*eslint-disable */
  var taskToUpdate = firebase.database().ref('tasks/' + _id);
  /*eslint-enable */
  return () =>
    taskToUpdate.update({
      taskDescription: _taskDescription,
      taskPlannedStartDateTime: _taskPlannedStartDateTime
    });
}

export function deleteTask(_id) {
  /*eslint-disable */
  var taskToDelete = firebase.database().ref('tasks/' + _id);
  /*eslint-enable */
  return () => taskToDelete.remove();
}

export function watchFirebaseTasksRef() {
  return function(dispatch) {
    tasks.on('child_added', data => {
      const newTask = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveTask(newTask));
    });
    tasks.on('child_changed', data => {
      const updatedTask = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveTask(updatedTask));
    });
    tasks.on('child_removed', data => {
      dispatch(receiveDeletedTask(data.getKey()));
    });
  };
}

function receiveTask(taskFromFirebase) {
  return {
    type: c.RECEIVE_TASK,
    task: taskFromFirebase
  };
}

function receiveDeletedTask(taskId) {
  return {
    type: c.RECEIVE_DELETED_TASK,
    taskId: taskId
  };
}
