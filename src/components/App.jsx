import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import EventData from './EventData';
import MenuData from './MenuData';
import DishData from './DishData';
import FoodData from './FoodData';
import StoreData from './StoreData';
import Welcome from './Welcome';
import Main from './Main';
import About from './About';
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
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import SearchTasks from './SearchTasks';
import Invitees from './Invitees';
import AddInvitee from './AddInvitee';
import DeleteInvitee from './DeleteInvitee';
import EditInvitee from './EditInvitee';
import SearchInvitees from './SearchInvitees';
import RecipeSearch from './RecipeSearch';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterEvents: EventData,
      masterMenus: MenuData,
      masterDishes: DishData,
      masterFoods: FoodData,
      masterStores: StoreData,
      selectedEvent: null,
      selectedEventProps: null,
      selectedMenu: null,
      selectedMenuProps: null,
      selectedDish: null,
      selectedDishProps: null,
      selectedFood: null,
      selectedFoodProps: null,
      selectedStore: null,
      selectedStoreProps: null
    };
    this.handleAddingNewEvent = this.handleAddingNewEvent.bind(this);
    this.handleDeletingEvent = this.handleDeletingEvent.bind(this);
    this.handleChangingSelectedEvent = this.handleChangingSelectedEvent.bind(this);
    this.handleEditingEvent = this.handleEditingEvent.bind(this);
    this.handleAddingNewMenu = this.handleAddingNewMenu.bind(this);
    this.handleDeletingMenu = this.handleDeletingMenu.bind(this);
    this.handleChangingSelectedMenu = this.handleChangingSelectedMenu.bind(this);
    this.handleEditingMenu = this.handleEditingMenu.bind(this);
    this.handleAddingNewDish = this.handleAddingNewDish.bind(this);
    this.handleDeletingDish = this.handleDeletingDish.bind(this);
    this.handleChangingSelectedDish = this.handleChangingSelectedDish.bind(this);
    this.handleEditingDish = this.handleEditingDish.bind(this);
    this.handleAddingNewFood = this.handleAddingNewFood.bind(this);
    this.handleDeletingFood = this.handleDeletingFood.bind(this);
    this.handleChangingSelectedFood = this.handleChangingSelectedFood.bind(this);
    this.handleEditingFood = this.handleEditingFood.bind(this);
  }

  handleAddingNewEvent(newEvent) {
    let newEventId = v4();
    let newMasterEvents = Object.assign({}, this.state.masterEvents, {[newEventId]: newEvent});
    this.setState({masterEvents: newMasterEvents});
  }

  handleDeletingEvent(response) {
    if (response.confirm === 'true') {
      delete this.state.masterEvents[response.eventToDelete.eventId];
      this.setState({masterEvents: this.state.masterEvents});
    }
    this.setState({selectedEvent: null});
  }

  handleEditingEvent(response) {
    let eventToUpdate = response.eventToUpdate;
    let newMasterEvents = Object.assign({}, this.state.masterEvents);
    newMasterEvents[eventToUpdate].eventName = response.eventName;
    newMasterEvents[eventToUpdate].eventDate = response.eventDate;
    newMasterEvents[eventToUpdate].eventLocation = response.eventLocation;
    newMasterEvents[eventToUpdate].menusId = response.menusId;
    this.setState({masterEvents: newMasterEvents});
  }

  handleChangingSelectedEvent(eventId, event){
    this.setState({selectedEvent: eventId});
    this.setState({selectedEventProps: event});
  }

  handleAddingNewMenu(newMenu) {
    let newMenuId = v4();
    let newMasterMenus = Object.assign({}, this.state.masterMenus, {[newMenuId]: newMenu});
    this.setState({masterMenus: newMasterMenus});
  }

  handleDeletingMenu(response) {
    if (response.confirm === 'true') {
      delete this.state.masterMenus[response.menuToDelete.menuId];
      this.setState({masterMenus: this.state.masterMenus});
    }
    this.setState({selectedMenu: null});
  }

  handleEditingMenu(response) {
    let menuToUpdate = response.menuToUpdate;
    let newMasterMenus = Object.assign({}, this.state.masterMenus);
    newMasterMenus[menuToUpdate].menuTheme = response.menuTheme;
    this.setState({masterMenus: newMasterMenus});
  }

  handleChangingSelectedMenu(menuId, menu){
    this.setState({selectedMenu: menuId});
    this.setState({selectedMenuProps: menu});
  }

  handleAddingNewDish(newDish) {
    let newDishId = v4();
    let newMasterDishes = Object.assign({}, this.state.masterDishes, {[newDishId]: newDish});
    this.setState({masterDishes: newMasterDishes});
  }

  handleDeletingDish(response) {
    if (response.confirm === 'true') {
      delete this.state.masterDishes[response.dishToDelete.dishId];
      this.setState({masterDishes: this.state.masterDishes});
    }
    this.setState({selectedDish: null});
  }

  handleEditingDish(response) {
    let dishToUpdate = response.dishToUpdate;
    let newMasterDishes = Object.assign({}, this.state.masterDishes);
    newMasterDishes[dishToUpdate].menuItemDescription = response.menuItemDescription;
    this.setState({masterDishes: newMasterDishes});
  }

  handleChangingSelectedDish(dishId, dish){
    this.setState({selectedDish: dishId});
    this.setState({selectedDishProps: dish});
  }

  handleAddingNewFood(newFood) {
    let newFoodId = v4();
    let newMasterFoods = Object.assign({}, this.state.masterFoods, {[newFoodId]: newFood});
    this.setState({masterFoods: newMasterFoods});
  }

  handleDeletingFood(response) {
    if (response.confirm === 'true') {
      delete this.state.masterFoods[response.foodToDelete.foodId];
      this.setState({masterFoods: this.state.masterFoods});
    }
    this.setState({selectedFood: null});
  }

  handleEditingFood(response) {
    let foodToUpdate = response.foodToUpdate;
    let newMasterFoods = Object.assign({}, this.state.masterFoods);
    newMasterFoods[foodToUpdate].ingredientDescription = response.ingredientDescription;
    this.setState({masterFoods: newMasterFoods});
  }

  handleChangingSelectedFood(foodId, food){
    this.setState({selectedFood: foodId});
    this.setState({selectedFoodProps: food});
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            font-family: 'Open Sans', sans-serif;
            background-color: beige;
            color: darkgreen;
            text-shadow: 1px 1px 2px black;          
          }

          .button-main {
            background: darkgreen;
            color: white;
            font-family: 'Open Sans', sans-serif;
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
            <Route exact path='/' component={Welcome} />
            <Route path='/main' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/events' render={() =><Events events={this.state.masterEvents} menus={this.state.masterMenus} onEventSelection={this.handleChangingSelectedEvent} />} />
            <Route path='/addevent' render={() =><AddEventForm menus={this.state.masterMenus} onNewEventCreation={this.handleAddingNewEvent} />} />
            <Route path='/deleteevent' render={() =><DeleteEventForm onEventDeletion={this.handleDeletingEvent} selectedEvent={this.state.selectedEvent} />} />
            <Route path='/editevent' render={() =><EditEventForm menus={this.state.masterMenus} onEventUpdate={this.handleEditingEvent} selectedEvent={this.state.selectedEvent} selectedEventProps={this.state.selectedEventProps} />} />
            <Route path='/searchevents' component={SearchEvents} />
            <Route path='/menus' render={() =><Menus menus={this.state.masterMenus} onMenuSelection={this.handleChangingSelectedMenu} />} />
            <Route path='/addmenu'  render={() =><AddMenuForm onNewMenuCreation={this.handleAddingNewMenu} />} />
            <Route path='/deletemenu' render={() =><DeleteMenuForm onMenuDeletion={this.handleDeletingMenu} selectedMenu={this.state.selectedMenu} />} />
            <Route path='/editmenu' render={() =><EditMenuForm onMenuUpdate={this.handleEditingMenu} selectedMenu={this.state.selectedMenu} selectedMenuProps={this.state.selectedMenuProps} />} />
            <Route path='/searchmenus' component={SearchMenus} />
            <Route path='/dishes' render={() =><Dishes dishes={this.state.masterDishes} onDishSelection={this.handleChangingSelectedDishEvent} />} />
            <Route path='/adddish' render={() =><AddDishForm dishes={this.state.masterDishes} onNewDishCreation={this.handleAddingNewDish} />} />
            <Route path='/deletedish' render={() =><DeleteDishForm onDishDeletion={this.handleDeletingDish} selectedDish={this.state.selectedDish} />} />
            <Route path='/editdish' render={() =><EditDishForm dishes={this.state.masterDishes} onDishUpdate={this.handleEditingDish} selectedDish={this.state.selectedDish} selectedDishProps={this.state.selectedDishProps} />} />
            <Route path='/searchdishes' component={SearchDishes} />
            <Route path='/foods' render={() =><Foods foods={this.state.masterFoods} onFoodSelection={this.handleChangingSelectedFood} />} />
            <Route path='/addfood' render={() =><AddFoodForm menus={this.state.masterMenus} stores={this.state.masterStores} onNewFoodCreation={this.handleAddingNewFood} />} />
            <Route path='/deletefood' render={() =><DeleteFoodForm onFoodDeletion={this.handleDeletingFood} selectedFood={this.state.selectedFood} />} />
            <Route path='/editfood' render={() =><EditFoodForm menus={this.state.masterMenus} stores={this.state.masterStores} onFoodUpdate={this.handleEditingFood} selectedFood={this.state.selectedFood} selectedFoodProps={this.state.selectedFoodProps} />} />
            <Route path='/searchfoods' component={SearchFoods} />
            <Route path='/stores' component={Stores} />
            <Route path='/addstore' component={AddStoreForm} />
            <Route path='/deletestore' component={DeleteStoreForm} />
            <Route path='/editstore' component={EditStoreForm} />
            <Route path='/searchstores' component={SearchStores} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/addtask' component={AddTask} />
            <Route path='/deletetask' component={DeleteTask} />
            <Route path='/edittask' component={EditTask} />
            <Route path='/searchtasks' component={SearchTasks} />
            <Route path='/invitees' component={Invitees} />
            <Route path='/addinvitee' component={AddInvitee} />
            <Route path='/deleteinvitee' component={DeleteInvitee} />
            <Route path='/editinvitee' component={EditInvitee} />
            <Route path='/searchinvitees' component={SearchInvitees} />
            <Route path='/recipes' component={RecipeSearch} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
