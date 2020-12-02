import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { CARS_AND_DRIVERS } from '../universal/pages';
// Components
import CarsAndDriversController from '../controllers/CarsAndDriversController';
import CarsAndDriversView from '../views/CarsAndDriversView';

const CarsAndDrivers = (props) => (
  <CarsAndDriversController
    {...props}
    View={CarsAndDriversView}
  />
);

export default (page(CarsAndDrivers, CARS_AND_DRIVERS));
