import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { CARS } from '../universal/pages';
// Components
import CarsController from '../controllers/CarsController';
import CarsView from '../views/CarsView';

const Cars = (props) => <CarsController {...props} View={CarsView} />;

export default (page(Cars, CARS));
