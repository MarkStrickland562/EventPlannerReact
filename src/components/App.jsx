import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Main from './Main';
import About from './About';
import Events from './Events';
import Menus from './Menus';
import Dishes from './Dishes';
import Foods from './Foods';
import Stores from './Stores';
import Tasks from './Tasks';
import Invitees from './Invitees';
import Recipes from './Recipes';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style global jsx>{`
        body {
          font-family: 'Luckiest Guy', cursive;
          background-color: beige;
          color: darkgreen;
          text-shadow: 1px 1px 2px black;          
        }
      `}
      </style>
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/main' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/menus' component={Menus} />
          <Route path='/dishes' component={Dishes} />
          <Route path='/foods' component={Foods} />
          <Route path='/stores' component={Stores} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/invitees' component={Invitees} />
          <Route path='/recipes' component={Recipes} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
