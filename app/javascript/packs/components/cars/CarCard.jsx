import React from 'react';
// Components
import {
  Paper,
} from '@material-ui/core';
// Images
import CarAvatar from 'images/CarAvatar.jpg';
// Utils
import { makeStyles } from '@material-ui/core/styles';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles({
  container: {
    height: 700,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar_container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #8F8F8F',
  },
  avatar: {
    borderRadius: '256px',
    border: '2px solid #8F8F8F',
    marginBottom: '20px',
    height: 200,
    width: 200,
  },
  details_container: {
    height: 150,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
      <div className={classes.avatar_container}>
        <img
          className={classes.avatar}
          src={CAR.image || CarAvatar}
          alt="car"
        />
      </div>
      <div className={classes.details_container}>
        <h1 style={{ margin: 0 }}>{`${CAR.title} ${CAR.model}`}</h1>
        <p style={{ margin: 0 }}>{CAR.color}</p>
      </div>
    </Paper>
  );
};

export default CarCard;
