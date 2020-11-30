import React from 'react';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Universal
import {
  BLOG,
  HOME,
  CARS,
  DRIVERS,
  CREATE_CAR,
  CREATE_DRIVER,
  CARS_AND_DRIVERS,
} from './universal/pages';
// Page Components
import HomeIndex from './pages/HomeIndex';
import BlogIndex from './pages/BlogIndex';
import CarsIndex from './pages/CarsIndex';
import CreateCarIndex from './pages/CreateCarIndex';
import DriversIndex from './pages/DriversIndex';
// import CarsAndDriversIndex from './pages/CarsAndDriversIndex';

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME} exact render={(props) => (<HomeIndex {...props} />)} />
      <Route path={`/${BLOG}`} exact render={(props) => (<BlogIndex {...props} />)} />
      <Route path={`/${CARS}`} exact render={(props) => (<CarsIndex {...props} />)} />
      <Switch>
        <Route path={`/${CREATE_CAR}`} exact render={(props) => (<CreateCarIndex {...props} />)} />
        {/* <Route path={`/${CARS}/:id`} exact render={(props) => (<CarIndex {...props} />)} /> */}
      </Switch>
      <Route path={`/${DRIVERS}`} exact render={(props) => (<DriversIndex {...props} />)} />
      {/* <Route path={`/${CARS_AND_DRIVERS}`} exact render={(props) => (<CarsAndDriversIndex {...props} />)} /> */}
    </Switch>
  </Router>
);

export default App;
