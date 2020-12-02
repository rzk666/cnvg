import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { CREATE_CAR } from '../universal/pages';
// Components
import CreateCarController from '../controllers/CreateCarController';
import CreateCarView from '../views/CreateCarView';

const CreateCar = (props) => <CreateCarController {...props} View={CreateCarView} />;

export default (page(CreateCar, CREATE_CAR));
