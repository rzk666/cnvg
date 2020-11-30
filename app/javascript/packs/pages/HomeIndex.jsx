import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { HOME } from '../universal/pages';
// Components
import HomeController from '../controllers/HomeController';
import HomeView from '../views/HomeView';

const Home = (props) => <HomeController {...props} View={HomeView} />;

export default (page(Home, HOME));
