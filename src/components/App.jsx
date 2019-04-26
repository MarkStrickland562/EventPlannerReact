import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Main from './Main';
import About from './About';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/main' component={Main} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
