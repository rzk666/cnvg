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
// Cars related pages
import CarsIndex from './pages/CarsIndex';
import CreateCarIndex from './pages/CreateCarIndex';
import CarIndex from './pages/CarIndex';
// Driver related pages
import DriversIndex from './pages/DriversIndex';
import CreateDriverIndex from './pages/CreateDriverIndex';
import DriverIndex from './pages/DriverIndex';
// General pages
// import CarsAndDriversIndex from './pages/CarsAndDriversIndex';

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME} exact render={(props) => (<HomeIndex {...props} />)} />
      <Route path={`/${BLOG}`} exact render={(props) => (<BlogIndex {...props} />)} />
      <Route path={`/${CARS}`} exact render={(props) => (<CarsIndex {...props} />)} />
      <Route path={`/${CREATE_CAR}`} exact render={(props) => (<CreateCarIndex {...props} />)} />
      <Route path={`/${CARS}/:id`} exact render={(props) => (<CarIndex {...props} />)} />
      <Route path={`/${DRIVERS}`} exact render={(props) => (<DriversIndex {...props} />)} />
      <Route path={`/${CREATE_DRIVER}`} exact render={(props) => (<CreateDriverIndex {...props} />)} />
      <Route path={`/${DRIVERS}/:id`} exact render={(props) => (<DriverIndex {...props} />)} />
      {/* <Route path={`/${CARS_AND_DRIVERS}`} exact render={(props) => (<CarsAndDriversIndex {...props} />)} /> */}
    </Switch>
  </Router>
);

export default App;
