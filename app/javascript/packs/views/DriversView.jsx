import React from 'react';
// Components
import MainList from '../components/MainList';

const DriversView = ({ isLoading, drivers }) => (
  <MainList isLoading={isLoading} entity="driver" data={drivers} />
);

export default DriversView;
