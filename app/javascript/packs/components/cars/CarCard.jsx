import React from 'react';
// Components
import {
  Paper,
} from '@material-ui/core';
// Images
import CarAvatar from 'images/CarAvatar.jpg';
// Utils
import { makeStyles } from '@material-ui/core/styles';
// Styles
import styles from './CarCard.module.scss';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles({
  container: {
    height: 700,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

// TEMP
const CAR = {
  title: 'Ferarri',
  model: 'Spider',
  color: 'yellow',
  image: '',

};

const CarCard = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <img src={CarAvatar} />
    </Paper>
  );
};

export default CarCard;
