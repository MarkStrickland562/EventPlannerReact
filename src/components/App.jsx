import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuData from './MenuData';
import DishData from './DishData';
import FoodData from './FoodData';
import StoreData from './StoreData';
import TaskData from './TaskData';
import InviteeData from './InviteeData';

import Welcome from './Welcome';
import Main from './Main';
import About from './About';
import Error404 from './Error404';

import Events from './Events';
import AddEventForm from './AddEventForm';
import DeleteEventForm from './DeleteEventForm';
import EditEventForm from './EditEventForm';
import SearchEvents from './SearchEvents';

import Menus from './Menus';
import AddMenuForm from './AddMenuForm';
import DeleteMenuForm from './DeleteMenuForm';
import EditMenuForm from './EditMenuForm';
import SearchMenus from './SearchMenus';

import Dishes from './Dishes';
import AddDishForm from './AddDishForm';
import DeleteDishForm from './DeleteDishForm';
import EditDishForm from './EditDishForm';
import SearchDishes from './SearchDishes';

import Foods from './Foods';
import AddFoodForm from './AddFoodForm';
import DeleteFoodForm from './DeleteFoodForm';
import EditFoodForm from './EditFoodForm';
import SearchFoods from './SearchFoods';

import Stores from './Stores';
import AddStoreForm from './AddStoreForm';
import DeleteStoreForm from './DeleteStoreForm';
import EditStoreForm from './EditStoreForm';
import SearchStores from './SearchStores';

import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';
import DeleteTaskForm from './DeleteTaskForm';
import EditTaskForm from './EditTaskForm';
import SearchTasks from './SearchTasks';

import Invitees from './Invitees';
import AddInviteeForm from './AddInviteeForm';
import DeleteInviteeForm from './DeleteInviteeForm';
import EditInviteeForm from './EditInviteeForm';
import SearchInvitees from './SearchInvitees';

import RecipeSearchForm from './RecipeSearchForm';
import Recipes from './Recipes';

import { recipeKey } from './.api-keys';
import { recipeID } from './.api-keys';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterMenus: MenuData,
      masterDishes: DishData,
      masterFoods: FoodData,
      masterStores: StoreData,
      masterTasks: TaskData,
      masterInvitees: InviteeData,

      selectedEvent: null,
      selectedEventProps: null,

      selectedMenu: null,
      selectedMenuProps: null,

      selectedDish: null,
      selectedDishProps: null,

      selectedFood: null,
      selectedFoodProps: null,

      selectedStore: null,
      selectedStoreProps: null,

      selectedTask: null,
      selectedTaskProps: null,

      selectedInvitee: null,
      selectedInviteeProps: null,

      masterRecipes: []
    };

    this.handleAddingNewEvent = this.handleAddingNewEvent.bind(this);
    this.handleDeletingEvent = this.handleDeletingEvent.bind(this);
    this.handleChangingSelectedEvent = this.handleChangingSelectedEvent.bind(
      this
    );
    this.handleEditingEvent = this.handleEditingEvent.bind(this);

    this.handleAddingNewMenu = this.handleAddingNewMenu.bind(this);
    this.handleDeletingMenu = this.handleDeletingMenu.bind(this);
    this.handleChangingSelectedMenu = this.handleChangingSelectedMenu.bind(
      this
    );
    this.handleEditingMenu = this.handleEditingMenu.bind(this);

    this.handleAddingNewDish = this.handleAddingNewDish.bind(this);
    this.handleDeletingDish = this.handleDeletingDish.bind(this);
    this.handleChangingSelectedDish = this.handleChangingSelectedDish.bind(
      this
    );
    this.handleEditingDish = this.handleEditingDish.bind(this);

    this.handleAddingNewFood = this.handleAddingNewFood.bind(this);
    this.handleDeletingFood = this.handleDeletingFood.bind(this);
    this.handleChangingSelectedFood = this.handleChangingSelectedFood.bind(
      this
    );
    this.handleEditingFood = this.handleEditingFood.bind(this);

    this.handleAddingNewStore = this.handleAddingNewStore.bind(this);
    this.handleDeletingStore = this.handleDeletingStore.bind(this);
    this.handleChangingSelectedStore = this.handleChangingSelectedStore.bind(
      this
    );
    this.handleEditingStore = this.handleEditingStore.bind(this);

    this.handleAddingNewTask = this.handleAddingNewTask.bind(this);
    this.handleDeletingTask = this.handleDeletingTask.bind(this);
    this.handleChangingSelectedTask = this.handleChangingSelectedTask.bind(
      this
    );
    this.handleEditingTask = this.handleEditingTask.bind(this);

    this.handleAddingNewInvitee = this.handleAddingNewInvitee.bind(this);
    this.handleDeletingInvitee = this.handleDeletingInvitee.bind(this);
    this.handleChangingSelectedInvitee = this.handleChangingSelectedInvitee.bind(
      this
    );
    this.handleEditingInvitee = this.handleEditingInvitee.bind(this);

    this.handleGettingRecipes = this.handleGettingRecipes.bind(this);
  }

  handleAddingNewEvent(newEvent) {
    let newEventId = v4();
    let newMasterEvents = Object.assign({}, this.state.masterEvents, {
      [newEventId]: newEvent
    });
    this.setState({ masterEvents: newMasterEvents });
    this.props.history.push('/events');
  }

  handleDeletingEvent(response) {
    if (response.confirm === 'true') {
      delete this.state.masterEvents[response.eventToDelete.eventId];
      this.setState({ masterEvents: this.state.masterEvents });
    }
    this.setState({ selectedEvent: null });
    this.props.history.push('/events');
  }

  handleEditingEvent(response) {
    let eventToUpdate = response.eventToUpdate;
    let newMasterEvents = Object.assign({}, this.state.masterEvents);
    newMasterEvents[eventToUpdate].eventName = response.eventName;
    newMasterEvents[eventToUpdate].eventDate = response.eventDate;
    newMasterEvents[eventToUpdate].eventLocation = response.eventLocation;
    newMasterEvents[eventToUpdate].menusId = response.menusId;
    this.setState({ masterEvents: newMasterEvents });
    this.props.history.push('/events');
  }

  handleChangingSelectedEvent(eventId, event) {
    this.setState({ selectedEvent: eventId });
    this.setState({ selectedEventProps: event });
  }

  handleAddingNewMenu(newMenu) {
    let newMenuId = v4();
    let newMasterMenus = Object.assign({}, this.state.masterMenus, {
      [newMenuId]: newMenu
    });
    this.setState({ masterMenus: newMasterMenus });
    this.props.history.push('/menus');
  }

  handleDeletingMenu(response) {
    if (response.confirm === 'true') {
      delete this.state.masterMenus[response.menuToDelete.menuId];
      this.setState({ masterMenus: this.state.masterMenus });
    }
    this.setState({ selectedMenu: null });
    this.props.history.push('/menus');
  }

  handleEditingMenu(response) {
    let menuToUpdate = response.menuToUpdate;
    let newMasterMenus = Object.assign({}, this.state.masterMenus);
    newMasterMenus[menuToUpdate].menuTheme = response.menuTheme;
    this.setState({ masterMenus: newMasterMenus });
    this.props.history.push('/menus');
  }

  handleChangingSelectedMenu(menuId, menu) {
    this.setState({ selectedMenu: menuId });
    this.setState({ selectedMenuProps: menu });
  }

  handleAddingNewDish(newDish) {
    let newDishId = v4();
    let newMasterDishes = Object.assign({}, this.state.masterDishes, {
      [newDishId]: newDish
    });
    this.setState({ masterDishes: newMasterDishes });
    this.props.history.push('/dishes');
  }

  handleDeletingDish(response) {
    if (response.confirm === 'true') {
      delete this.state.masterDishes[response.dishToDelete.dishId];
      this.setState({ masterDishes: this.state.masterDishes });
    }
    this.setState({ selectedDish: null });
    this.props.history.push('/dishes');
  }

  handleEditingDish(response) {
    let dishToUpdate = response.dishToUpdate;
    let newMasterDishes = Object.assign({}, this.state.masterDishes);
    newMasterDishes[dishToUpdate].menuItemDescription =
      response.menuItemDescription;
    this.setState({ masterDishes: newMasterDishes });
    this.props.history.push('/dishes');
  }

  handleChangingSelectedDish(dishId, dish) {
    this.setState({ selectedDish: dishId });
    this.setState({ selectedDishProps: dish });
  }

  handleAddingNewFood(newFood) {
    let newFoodId = v4();
    let newMasterFoods = Object.assign({}, this.state.masterFoods, {
      [newFoodId]: newFood
    });
    this.setState({ masterFoods: newMasterFoods });
    this.props.history.push('/foods');
  }

  handleDeletingFood(response) {
    if (response.confirm === 'true') {
      delete this.state.masterFoods[response.foodToDelete.foodId];
      this.setState({ masterFoods: this.state.masterFoods });
    }
    this.setState({ selectedFood: null });
    this.props.history.push('/foods');
  }

  handleEditingFood(response) {
    let foodToUpdate = response.foodToUpdate;
    let newMasterFoods = Object.assign({}, this.state.masterFoods);
    newMasterFoods[foodToUpdate].ingredientDescription =
      response.ingredientDescription;
    newMasterFoods[foodToUpdate].menuItemsId = response.menuItemsId;
    newMasterFoods[foodToUpdate].storeId = response.storeId;
    this.setState({ masterFoods: newMasterFoods });
    this.props.history.push('/foods');
  }

  handleChangingSelectedFood(foodId, food) {
    this.setState({ selectedFood: foodId });
    this.setState({ selectedFoodProps: food });
  }

  handleAddingNewStore(newStore) {
    let newStoreId = v4();
    let newMasterStores = Object.assign({}, this.state.masterStores, {
      [newStoreId]: newStore
    });
    this.setState({ masterStores: newMasterStores });
    this.props.history.push('/stores');
  }

  handleDeletingStore(response) {
    if (response.confirm === 'true') {
      delete this.state.masterStores[response.storeToDelete.storeId];
      this.setState({ masterStores: this.state.masterStores });
    }
    this.setState({ selectedStore: null });
    this.props.history.push('/stores');
  }

  handleEditingStore(response) {
    let storeToUpdate = response.storeToUpdate;
    let newMasterStores = Object.assign({}, this.state.masterStores);
    newMasterStores[storeToUpdate].storeName = response.storeName;
    this.setState({ masterStores: newMasterStores });
    this.props.history.push('/stores');
  }

  handleChangingSelectedStore(storeId, store) {
    this.setState({ selectedStore: storeId });
    this.setState({ selectedStoreProps: store });
  }

  handleAddingNewTask(newTask) {
    let newTaskId = v4();
    let newMasterTasks = Object.assign({}, this.state.masterTasks, {
      [newTaskId]: newTask
    });
    this.setState({ masterTasks: newMasterTasks });
    this.props.history.push('/tasks');
  }

  handleDeletingTask(response) {
    if (response.confirm === 'true') {
      delete this.state.masterTasks[response.taskToDelete.taskId];
      this.setState({ masterTasks: this.state.masterTasks });
    }
    this.setState({ selectedTask: null });
    this.props.history.push('/tasks');
  }

  handleEditingTask(response) {
    let taskToUpdate = response.taskToUpdate;
    let newMasterTasks = Object.assign({}, this.state.masterTasks);
    newMasterTasks[taskToUpdate].taskDescription = response.taskDescription;
    newMasterTasks[taskToUpdate].taskPlannedStartDateTime =
      response.taskPlannedStartDateTime;
    this.setState({ masterTasks: newMasterTasks });
    this.props.history.push('/tasks');
  }

  handleChangingSelectedTask(taskId, task) {
    this.setState({ selectedTask: taskId });
    this.setState({ selectedTaskProps: task });
  }

  handleAddingNewInvitee(newInvitee) {
    let newInviteeId = v4();
    let newMasterInvitees = Object.assign({}, this.state.masterInvitees, {
      [newInviteeId]: newInvitee
    });
    this.setState({ masterInvitees: newMasterInvitees });
    this.props.history.push('/invitees');
  }

  handleDeletingInvitee(response) {
    if (response.confirm === 'true') {
      delete this.state.masterInvitees[response.inviteeToDelete.inviteeId];
      this.setState({ masterInvitees: this.state.masterInvitees });
    }
    this.setState({ selectedInvitee: null });
    this.props.history.push('/invitees');
  }

  handleEditingInvitee(response) {
    let inviteeToUpdate = response.inviteeToUpdate;
    let newMasterInvitees = Object.assign({}, this.state.masterInvitees);
    newMasterInvitees[inviteeToUpdate].inviteeName = response.inviteeName;
    newMasterInvitees[inviteeToUpdate].inviteeEmailAddress =
      response.inviteeEmailAddress;
    this.setState({ masterInvitees: newMasterInvitees });
    this.props.history.push('/invitees');
  }

  handleChangingSelectedInvitee(inviteeId, invitee) {
    this.setState({ selectedInvitee: inviteeId });
    this.setState({ selectedInviteeProps: invitee });
  }

  handleGettingRecipes(response) {
    let searchString = response.searchString;
    let searchCount = response.searchCount;

    fetch(
      `https://api.edamam.com/search?q=${searchString}&to=${searchCount}&app_id=${recipeID}&app_key=${recipeKey}`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ masterRecipes: data.hits });
        this.props.history.push('/recipes');
      });
  }

  render() {
    return (
      <div>
        <style global jsx>
          {`
            body {
              font-family: "Open Sans", sans-serif;
              background-color: beige;
              color: darkgreen;
              text-shadow: 1px 1px 2px black;
            }

            .button-main {
              background: darkgreen;
              color: white;
              font-family: "Open Sans", sans-serif;
              font-size: 14px;
              font-weight: bold;
              padding-right: 2px;
              margin-right: 5px;
              border-radius: 2px;
            }

            .link {
              color: white;
              text-shadow: 1px 1px 2px black;
              text-decoration: none;
            }

            .externalLink {
              color: darkgreen;
              text-shadow: 1px 1px 2px black;
            }

            .externalLink:hover {
              color: rgb(216, 216, 216);
            }

            .navlink {
              color: green;
              font-weight: bold;
              text-decoration: none;
            }

            .navlink:hover {
              color: rgb(216, 216, 216);
            }
          `}
        </style>
        <div>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />

            <Route
              path="/events"
              render={() => (
                <Events
                  events={this.props.masterEvents}
                  menus={this.state.masterMenus}
                  onEventSelection={this.handleChangingSelectedEvent}
                />
              )}
            />
            <Route
              path="/addevent"
              render={() => (
                <AddEventForm
                  menus={this.state.masterMenus}
                  onNewEventCreation={this.handleAddingNewEvent}
                />
              )}
            />
            <Route
              path="/deleteevent"
              render={() => (
                <DeleteEventForm
                  onEventDeletion={this.handleDeletingEvent}
                  selectedEvent={this.state.selectedEvent}
                />
              )}
            />
            <Route
              path="/editevent"
              render={() => (
                <EditEventForm
                  menus={this.state.masterMenus}
                  onEventUpdate={this.handleEditingEvent}
                  selectedEvent={this.state.selectedEvent}
                  selectedEventProps={this.state.selectedEventProps}
                />
              )}
            />
            <Route path="/searchevents" component={SearchEvents} />

            <Route
              path="/menus"
              render={() => (
                <Menus
                  menus={this.state.masterMenus}
                  onMenuSelection={this.handleChangingSelectedMenu}
                />
              )}
            />
            <Route
              path="/addmenu"
              render={() => (
                <AddMenuForm onNewMenuCreation={this.handleAddingNewMenu} />
              )}
            />
            <Route
              path="/deletemenu"
              render={() => (
                <DeleteMenuForm
                  onMenuDeletion={this.handleDeletingMenu}
                  selectedMenu={this.state.selectedMenu}
                />
              )}
            />
            <Route
              path="/editmenu"
              render={() => (
                <EditMenuForm
                  onMenuUpdate={this.handleEditingMenu}
                  selectedMenu={this.state.selectedMenu}
                  selectedMenuProps={this.state.selectedMenuProps}
                />
              )}
            />
            <Route path="/searchmenus" component={SearchMenus} />

            <Route
              path="/dishes"
              render={() => (
                <Dishes
                  dishes={this.state.masterDishes}
                  onDishSelection={this.handleChangingSelectedDish}
                />
              )}
            />
            <Route
              path="/adddish"
              render={() => (
                <AddDishForm
                  dishes={this.state.masterDishes}
                  onNewDishCreation={this.handleAddingNewDish}
                />
              )}
            />
            <Route
              path="/deletedish"
              render={() => (
                <DeleteDishForm
                  onDishDeletion={this.handleDeletingDish}
                  selectedDish={this.state.selectedDish}
                />
              )}
            />
            <Route
              path="/editdish"
              render={() => (
                <EditDishForm
                  dishes={this.state.masterDishes}
                  onDishUpdate={this.handleEditingDish}
                  selectedDish={this.state.selectedDish}
                  selectedDishProps={this.state.selectedDishProps}
                />
              )}
            />
            <Route path="/searchdishes" component={SearchDishes} />

            <Route
              path="/foods"
              render={() => (
                <Foods
                  foods={this.state.masterFoods}
                  dishes={this.state.masterDishes}
                  stores={this.state.masterStores}
                  onFoodSelection={this.handleChangingSelectedFood}
                />
              )}
            />
            <Route
              path="/addfood"
              render={() => (
                <AddFoodForm
                  dishes={this.state.masterDishes}
                  stores={this.state.masterStores}
                  onNewFoodCreation={this.handleAddingNewFood}
                />
              )}
            />
            <Route
              path="/deletefood"
              render={() => (
                <DeleteFoodForm
                  onFoodDeletion={this.handleDeletingFood}
                  selectedFood={this.state.selectedFood}
                />
              )}
            />
            <Route
              path="/editfood"
              render={() => (
                <EditFoodForm
                  dishes={this.state.masterDishes}
                  stores={this.state.masterStores}
                  onFoodUpdate={this.handleEditingFood}
                  selectedFood={this.state.selectedFood}
                  selectedFoodProps={this.state.selectedFoodProps}
                />
              )}
            />
            <Route path="/searchfoods" component={SearchFoods} />

            <Route
              path="/stores"
              render={() => (
                <Stores
                  stores={this.state.masterStores}
                  onStoreSelection={this.handleChangingSelectedStore}
                />
              )}
            />
            <Route
              path="/addstore"
              render={() => (
                <AddStoreForm onNewStoreCreation={this.handleAddingNewStore} />
              )}
            />
            <Route
              path="/deletestore"
              render={() => (
                <DeleteStoreForm
                  onStoreDeletion={this.handleDeletingStore}
                  selectedStore={this.state.selectedStore}
                />
              )}
            />
            <Route
              path="/editstore"
              render={() => (
                <EditStoreForm
                  onStoreUpdate={this.handleEditingStore}
                  selectedStore={this.state.selectedStore}
                  selectedStoreProps={this.state.selectedStoreProps}
                />
              )}
            />
            <Route path="/searchstores" component={SearchStores} />

            <Route
              path="/tasks"
              render={() => (
                <Tasks
                  tasks={this.state.masterTasks}
                  onTaskSelection={this.handleChangingSelectedTask}
                />
              )}
            />
            <Route
              path="/addtask"
              render={() => (
                <AddTaskForm onNewTaskCreation={this.handleAddingNewTask} />
              )}
            />
            <Route
              path="/deletetask"
              render={() => (
                <DeleteTaskForm
                  onTaskDeletion={this.handleDeletingTask}
                  selectedTask={this.state.selectedTask}
                />
              )}
            />
            <Route
              path="/edittask"
              render={() => (
                <EditTaskForm
                  onTaskUpdate={this.handleEditingTask}
                  selectedTask={this.state.selectedTask}
                  selectedTaskProps={this.state.selectedTaskProps}
                />
              )}
            />
            <Route path="/searchtasks" component={SearchTasks} />

            <Route
              path="/invitees"
              render={() => (
                <Invitees
                  invitees={this.state.masterInvitees}
                  onInviteeSelection={this.handleChangingSelectedInvitee}
                />
              )}
            />
            <Route
              path="/addinvitee"
              render={() => (
                <AddInviteeForm
                  onNewInviteeCreation={this.handleAddingNewInvitee}
                />
              )}
            />
            <Route
              path="/deleteinvitee"
              render={() => (
                <DeleteInviteeForm
                  onInviteeDeletion={this.handleDeletingInvitee}
                  selectedInvitee={this.state.selectedInvitee}
                />
              )}
            />
            <Route
              path="/editinvitee"
              render={() => (
                <EditInviteeForm
                  onInviteeUpdate={this.handleEditingInvitee}
                  selectedInvitee={this.state.selectedInvitee}
                  selectedInviteeProps={this.state.selectedInviteeProps}
                />
              )}
            />
            <Route path="/searchinvitees" component={SearchInvitees} />

            <Route
              path="/searchrecipes"
              render={() => (
                <RecipeSearchForm onRecipeSearch={this.handleGettingRecipes} />
              )}
            />
            <Route
              path="/recipes"
              render={() => <Recipes recipes={this.state.masterRecipes} />}
            />

            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  masterEvents: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterEvents: state.masterEvents
  };
};

export default withRouter(connect(mapStateToProps)(App));
