import React from 'react';
// Components
import AddNewEntity from '../components/AddNewEntity';

const CreateCarView = ({ drivers }) => (
  <AddNewEntity
    data={drivers}
    entity="car"
  />
);

export default CreateCarView;
