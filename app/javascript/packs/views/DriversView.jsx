import React from 'react';
// Components
import MainList from '../components/MainList';

const DriversView = ({ data }) => (
  <MainList entity="Driver" data={data} />
);

export default DriversView;
