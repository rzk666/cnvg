import React from 'react';
// Components
import AddNewEntity from '../components/AddNewEntity';

const CreateCarView = ({ data }) => (
  <AddNewEntity
    data={data}
    entity="car"
  />
);

export default CreateCarView;
