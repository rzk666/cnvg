import React from 'react';
// Components
import {
  Paper,
  Button,
} from '@material-ui/core';
// Images
import CarAvatar from 'images/CarAvatar.jpg';
// Utils
import { capitalize } from '../../utils/libs';
import { makeStyles } from '@material-ui/core/styles';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles({
  container: {
    height: 700,
    minWidth: 300,
    maxWidth: 300,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '50px 0',
    borderRadius: '256px',
    height: 150,
    width: 150,
  },
  header: {
    height: 57,
    width: '100%',
    backgroundColor: '#303030',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    borderBottom: '1px solid rgb(81,81,81)',
  },
  subtitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#B3B3B3',
    margin: 0,
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 20px 0',
  },
  btn: {
    width: '80%',
    height: 50,
    marginTop: 'auto',
    marginBottom: 30,
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
      <div className={classes.header}>
        Car Profile
      </div>
      <img
        className={classes.avatar}
        src={CAR.image || CarAvatar}
        alt="car"
      />
      <p className={classes.subtitle}>Firm</p>
      <h1 className={classes.title}>{CAR.title.toUpperCase()}</h1>
      <p className={classes.subtitle}>Model</p>
      <h1 className={classes.title}>{CAR.model.toUpperCase()}</h1>
      <p className={classes.subtitle}>Color</p>
      <h1 className={classes.title}>{CAR.color.toUpperCase() || 'Unknown'}</h1>
      <Button color="white" className={classes.btn}>View all cars</Button>
    </Paper>
  );
};

export default CarCard;
