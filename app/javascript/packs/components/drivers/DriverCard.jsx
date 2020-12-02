import React from 'react';
// Components
import {
  Paper,
  Button,
} from '@material-ui/core';
// Images
import { AccountCircle } from '@material-ui/icons';
// Utils
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// Styles
import CARD_STYLES from '../styles/cards/CardStyles';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles(CARD_STYLES);

const DriverCard = ({ isLoading, data }) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    name,
    email,
    dateOfBirth,
    image,
  } = data;
  return (
    <Paper className={classnames(classes.container, { [classes.loading]: isLoading })}>
      <div className={classes.header}>
        Driver Profile
      </div>
      {!isLoading
      && (
        <>
          <>
            { image
              ? (
                <img
                  className={classes.avatar}
                  src={image}
                  alt="driver"
                />
              ) : <AccountCircle className={classes.avatar} />}
          </>
          <p className={classes.subtitle}>Name</p>
          <h1 className={classes.title}>{name.toUpperCase()}</h1>
          <p className={classes.subtitle}>Email</p>
          <h1 className={classes.title}>{email.toUpperCase()}</h1>
          { dateOfBirth
          && (
          <>
            <p className={classes.subtitle}>Date of Birth</p>
            <h1 className={classes.title}>{new Date(dateOfBirth).toLocaleDateString()}</h1>
          </>
          )}
        </>
      )}
      <Button
        color="white"
        className={classes.btn}
        onClick={() => history.push('/drivers')}
      >
        View all drivers
      </Button>
    </Paper>
  );
};

export default DriverCard;
