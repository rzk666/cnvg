import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { CREATE_DRIVER } from '../universal/pages';
// Components
import CreateDriverController from '../controllers/CreateDriverController';
import CreateDriverView from '../views/CreateDriverView';

const CreateDriver = (props) => <CreateDriverController {...props} View={CreateDriverView} />;

export default (page(CreateDriver, CREATE_DRIVER));
