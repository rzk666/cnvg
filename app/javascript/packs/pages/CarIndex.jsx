import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { CARS } from '../universal/pages';
// Components
import CarController from '../controllers/CarController';
import CarView from '../views/CarView';

const Car = (props) => <CarController {...props} View={CarView} />;

export default (page(Car, CARS));
