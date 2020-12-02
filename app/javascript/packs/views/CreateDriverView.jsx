import React from 'react';
// Components
import AddNewEntity from '../components/AddNewEntity';

const CreateNewDriver = ({ data }) => (
  <AddNewEntity
    data={data}
    entity="driver"
  />
);

export default CreateNewDriver;
