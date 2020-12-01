import React from 'react';
// Components
import { Paper } from '@material-ui/core';
import AddNewDriver from '../components/drivers/AddNewDriver';
// Styles
import styles from './CreateDriver.module.scss';

const CreateDriverView = ({ prop }) => (
  <div className={styles.wrapper}>
    <Paper className={styles.container}>
      <h1>Add a new driver</h1>
      <AddNewDriver />
    </Paper>
  </div>
);

export default CreateDriverView;
