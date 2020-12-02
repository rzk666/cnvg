import React from 'react';
// Components
import MainList from '../components/MainList';

const CarsView = ({ cars, isLoading }) => (
  <MainList isLoading={isLoading} entity="car" data={cars} />
);

export default CarsView;
