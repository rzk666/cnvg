import React from 'react';
// Components
import MainList from '../components/MainList';

const CarsView = ({ data }) => (
  <MainList entity="Car" data={data} />
);

export default CarsView;
