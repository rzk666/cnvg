import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { DRIVERS } from '../universal/pages';
// Components
import DriverController from '../controllers/DriverController';
import DriverView from '../views/DriverView';

const Driver = (props) => <DriverController {...props} View={DriverView} />;

export default (page(Driver, DRIVERS));
