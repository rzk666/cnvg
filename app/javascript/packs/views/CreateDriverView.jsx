import React from 'react';
// Components
import AddNewEntity from '../components/AddNewEntity';

const CreateNewDriver = ({ cars, isLoading }) => (
  <AddNewEntity
    isLoading={isLoading}
    data={cars}
    entity="driver"
  />
);

export default CreateNewDriver;
