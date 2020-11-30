import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { DRIVERS } from '../universal/pages';
// Components
import DriversController from '../controllers/DriversController';
import DriversView from '../views/DriversView';

const Drivers = (props) => <DriversController {...props} View={DriversView} />;

export default (page(Drivers, DRIVERS));
