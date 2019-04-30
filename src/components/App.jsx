import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import EventData from './EventDataObject';
import Welcome from './Welcome';
import Main from './Main';
import About from './About';
import Events from './Events';
import AddEventForm from './AddEventForm';
import DeleteEventForm from './DeleteEventForm';
import EditEventForm from './EditEventForm';
import SearchEvents from './SearchEvents';
import Menus from './Menus';
import AddMenu from './AddMenu';
import DeleteMenu from './DeleteMenu';
import EditMenu from './EditMenu';
import SearchMenus from './SearchMenus';
import Dishes from './Dishes';
import AddDish from './AddDish';
import DeleteDish from './DeleteDish';
import EditDish from './EditDish';
import SearchDishes from './SearchDishes';
import Foods from './Foods';
import AddFood from './AddFood';
import DeleteFood from './DeleteFood';
import EditFood from './EditFood';
import SearchFoods from './SearchFoods';
import Stores from './Stores';
import AddStore from './AddStore';
import DeleteStore from './DeleteStore';
import EditStore from './EditStore';
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
import Recipes from './Recipes';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterEvents: EventData,
      selectedEvent: null
    };
    this.handleAddingNewEvent = this.handleAddingNewEvent.bind(this);
    this.handleDeletingEvent = this.handleDeletingEvent.bind(this);
    this.handleChangingSelectedEvent = this.handleChangingSelectedEvent.bind(this);
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

  handleEditingEvent(selectedEvent) {
    console.log(selectedEvent);
    // this.setState({masterEvents: this.state.masterEvents});
    // this.setState({selectedEvent: null});
    // console.log(this.state.selectedEvent);
  }

  handleChangingSelectedEvent(eventId){
    this.setState({selectedEventId: eventId.eventId});
    this.setState({selectedEvent: eventId});
    // console.log(eventId.eventId);
    // console.log(this.state.selectedEventId);
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            font-family: 'Luckiest Guy', cursive;
            background-color: beige;
            color: darkgreen;
            text-shadow: 1px 1px 2px black;          
          }

          .button-main {
            color: darkgreen;
            font-family: 'Luckiest Guy', cursive;
            padding-right: 2px;
            margin-right: 5px;
          }

          .link {
            color: darkgreen;
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
            <Route path='/events' render={() =><Events events={this.state.masterEvents} onEventSelection={this.handleChangingSelectedEvent} />} />
            <Route path='/addevent' render={() =><AddEventForm onNewEventCreation={this.handleAddingNewEvent} />} />
            <Route path='/deleteevent' render={() =><DeleteEventForm onEventDeletion={this.handleDeletingEvent} selectedEvent={this.state.selectedEvent} />} />
            <Route path='/editevent' render={() =><EditEventForm onEventUpdate={this.handleEditingEvent} selectedEvent={this.state.selectedEvent} />} />
            <Route path='/searchevents' component={SearchEvents} />
            <Route path='/menus' component={Menus} />
            <Route path='/addmenu' component={AddMenu} />
            <Route path='/deletemenu' component={DeleteMenu} />
            <Route path='/editmenu' component={EditMenu} />
            <Route path='/searchmenus' component={SearchMenus} />
            <Route path='/dishes' component={Dishes} />
            <Route path='/adddish' component={AddDish} />
            <Route path='/deletedish' component={DeleteDish} />
            <Route path='/editdish' component={EditDish} />
            <Route path='/searchdishes' component={SearchDishes} />
            <Route path='/foods' component={Foods} />
            <Route path='/addfood' component={AddFood} />
            <Route path='/deletefood' component={DeleteFood} />
            <Route path='/editfood' component={EditFood} />
            <Route path='/searchfoods' component={SearchFoods} />
            <Route path='/stores' component={Stores} />
            <Route path='/addstore' component={AddStore} />
            <Route path='/deletestore' component={DeleteStore} />
            <Route path='/editstore' component={EditStore} />
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
            <Route path='/recipes' component={Recipes} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
