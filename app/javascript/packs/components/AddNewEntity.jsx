import React from 'react';
// Components
import {
  Paper,
} from '@material-ui/core';
import AddNewCar from './cars/AddNewCar';
import AddNewDriver from './drivers/AddNewDriver';
// Styles
import styles from './AddNewEntity.module.scss';

const AddNewEntity = ({ entity, data }) => (
  <div className={styles.wrapper}>
    <Paper className={styles.container}>
      <div className={styles.header}>
        <h1>{`Add a new ${entity}`}</h1>
      </div>
      { entity === 'car'
        ? <AddNewCar data={data} />
        : <AddNewDriver data={data} />}
    </Paper>
  </div>
);

export default AddNewEntity;
