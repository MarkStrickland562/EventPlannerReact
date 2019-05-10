import eventsReducer from './events-reducer';
import selectedEventReducer from './selected-event-reducer';
import menusReducer from './menus-reducer';
import selectedMenuReducer from './selected-menu-reducer';
import dishesReducer from './dishes-reducer';
import selectedDishReducer from './selected-dish-reducer';
import foodsReducer from './foods-reducer';
import selectedFoodReducer from './selected-food-reducer';
import storesReducer from './stores-reducer';
import selectedStoreReducer from './selected-store-reducer';
import tasksReducer from './tasks-reducer';
import selectedTaskReducer from './selected-task-reducer';
import inviteesReducer from './invitees-reducer';
import selectedInviteeReducer from './selected-invitee-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterEvents: eventsReducer,
  selectedEvent: selectedEventReducer,
  masterMenus: menusReducer,
  selectedMenu: selectedMenuReducer,
  masterDishes: dishesReducer,
  selectedDish: selectedDishReducer,
  masterFoods: foodsReducer,
  selectedFood: selectedFoodReducer,
  masterStores: storesReducer,
  selectedStore: selectedStoreReducer,
  masterTasks: tasksReducer,
  selectedTask: selectedTaskReducer,
  masterInvitees: inviteesReducer,
  selectedInvitee: selectedInviteeReducer
});

export default rootReducer;
