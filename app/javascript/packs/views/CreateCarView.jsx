import React from 'react';
// Components
import { Paper } from '@material-ui/core';
import AddNewCar from '../components/cars/AddNewCar';
// Styles
import styles from './CreateCar.module.scss';

const CreateCarView = ({ prop }) => (
  <div className={styles.wrapper}>
    <Paper className={styles.container}>
      <h1>Add a new car</h1>
      <AddNewCar />
    </Paper>
  </div>
);

export default CreateCarView;
