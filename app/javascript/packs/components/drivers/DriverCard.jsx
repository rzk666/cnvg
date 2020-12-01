import React from 'react';
// Components
import {
  Paper,
} from '@material-ui/core';
// Images
import { AccountCircle } from '@material-ui/icons';
// Utils
import { makeStyles } from '@material-ui/core/styles';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles({
  container: {
    height: 350,
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
const DRIVER = {
  name: 'Razi Elbaz',
  email: 'raziprojects@gmail.com',
  dateOfBirth: '2000-01-01',
  image: '',
};

const DriverCard = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <div className={classes.avatar_container}>
        { DRIVER.image ? (
          <img
            className={classes.avatar}
            src={DRIVER.image}
            alt="car"
          />
        ) : <AccountCircle className={classes.avatar} /> }
      </div>
      <div className={classes.details_container}>
        <h1 style={{ margin: 0 }}>{DRIVER.name}</h1>
        <p style={{ margin: 0 }}>{DRIVER.email}</p>
        <p style={{ margin: 0 }}>{DRIVER.dateOfBirth}</p>
      </div>
    </Paper>
  );
};

export default DriverCard;
