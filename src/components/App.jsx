import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      masterRecipes: []
    };

    this.handleGettingRecipes = this.handleGettingRecipes.bind(this);
    this.handleRouteBack = this.handleRouteBack.bind(this);
  }

  handleRouteBack(target) {
    this.props.history.push(`/${target}`);
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
                  menus={this.props.masterMenus}
                />
              )}
            />
            <Route
              path="/addevent"
              render={() => (
                <AddEventForm
                  menus={this.props.masterMenus}
                  onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/deleteevent"
              render={() => (
                <DeleteEventForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/editevent"
              render={() => (
                <EditEventForm
                  menus={this.props.masterMenus}
                  onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchevents" component={SearchEvents} />
            <Route
              path="/menus"
              render={() => (
                <Menus
                  menus={this.props.masterMenus}
                />
              )}
            />
            <Route
              path="/addmenu"
              render={() => (
                <AddMenuForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deletemenu"
              render={() => (
                <DeleteMenuForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/editmenu"
              render={() => (
                <EditMenuForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchmenus" component={SearchMenus} />

            <Route
              path="/dishes"
              render={() => (
                <Dishes
                  dishes={this.props.masterDishes}
                />
              )}
            />
            <Route
              path="/adddish"
              render={() => (
                <AddDishForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/deletedish"
              render={() => (
                <DeleteDishForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/editdish"
              render={() => (
                <EditDishForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchdishes" component={SearchDishes} />

            <Route
              path="/foods"
              render={() => (
                <Foods foods={this.props.masterFoods} dishes={this.props.masterDishes} stores={this.props.masterStores}
                />
              )}
            />
            <Route
              path="/addfood"
              render={() => (
                <AddFoodForm dishes={this.props.masterDishes} stores={this.props.masterStores} onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/deletefood"
              render={() => (
                <DeleteFoodForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/editfood"
              render={() => (
                <EditFoodForm dishes={this.props.masterDishes} stores={this.props.masterStores} onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchfoods" component={SearchFoods} />

            <Route
              path="/stores"
              render={() => (
                <Stores
                  stores={this.props.masterStores}
                />
              )}
            />
            <Route
              path="/addstore"
              render={() => (
                <AddStoreForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deletestore"
              render={() => (
                <DeleteStoreForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/editstore"
              render={() => (
                <EditStoreForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchstores" component={SearchStores} />

            <Route
              path="/tasks"
              render={() => (
                <Tasks
                  tasks={this.props.masterTasks}
                />
              )}
            />
            <Route
              path="/addtask"
              render={() => (
                <AddTaskForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deletetask"
              render={() => (
                <DeleteTaskForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/edittask"
              render={() => (
                <EditTaskForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route path="/searchtasks" component={SearchTasks} />

            <Route
              path="/invitees"
              render={() => (
                <Invitees
                  invitees={this.props.masterInvitees}
                />
              )}
            />
            <Route
              path="/addinvitee"
              render={() => (
                <AddInviteeForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/deleteinvitee"
              render={() => (
                <DeleteInviteeForm onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route
              path="/editinvitee"
              render={() => (
                <EditInviteeForm onFormSubmit={this.handleRouteBack} />
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
  masterEvents: PropTypes.object,
  masterMenus: PropTypes.object,
  masterDishes: PropTypes.object,
  masterFoods: PropTypes.object,
  masterStores: PropTypes.object,
  masterTasks: PropTypes.object,
  masterInvitees: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterEvents: state.masterEvents,
    masterMenus: state.masterMenus,
    masterDishes: state.masterDishes,
    masterFoods: state.masterFoods,
    masterStores: state.masterStores,
    masterTasks: state.masterTasks,
    masterInvitees: state.masterInvitees
  };
};

export default withRouter(connect(mapStateToProps)(App));
